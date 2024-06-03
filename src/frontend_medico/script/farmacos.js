import '../Components/medicamentos.js';

let carrito = [];

const displayMedicamentos = async () => {
  const medicamentosList = document.getElementById('medicamentos-list');
  medicamentosList.innerHTML = '';

  try {
    const response = await fetch('http://localhost:3000/Farmacos');
    const result = await response.json();

    if (result.success) {
      const medicamentos = result.data;
      medicamentos.forEach(medicamento => {
        const medicamentoElement = document.createElement('mi-medicamento');
        medicamentoElement.setAttribute('nombre', medicamento.nombre);
        medicamentoElement.setAttribute('tipo', medicamento.tipo);
        medicamentoElement.setAttribute('precio_unitario', medicamento.precio_unitario);

        medicamentoElement.addEventListener('add-to-cart', (e) => {
          carrito.push(e.detail);
          actualizarCarrito();
        });

        medicamentosList.appendChild(medicamentoElement);
      });
    } else {
      console.error('Error al obtener los medicamentos:', result.error);
    }
  } catch (error) {
    console.error('Error al obtener los medicamentos:', error);
  }
};

const actualizarCarrito = () => {
  const carritoList = document.getElementById('carrito-list');
  carritoList.innerHTML = '';
  carrito.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.nombre} - ${item.tipo} - ${item.precio_unitario}`;
    carritoList.appendChild(listItem);
  });
};

const enviarPedido = async () => {
  try {
    const response = await fetch('http://localhost:3000/pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: carrito }),
    });
    const result = await response.json();
    if (result.success) {
      alert('Pedido enviado con éxito');
      carrito = [];
      actualizarCarrito();
    } else {
      console.error('Error al enviar el pedido:', result.error);
    }
  } catch (error) {
    console.error('Error al enviar el pedido:', error);
  }
};

window.onload = () => {
  displayMedicamentos();

  document.getElementById('enviar-pedido').addEventListener('click', enviarPedido);
};
