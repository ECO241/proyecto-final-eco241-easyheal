import '../Components/farmacos.js';

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
        medicamentoElement.setAttribute('id', medicamento.id); // Agregar el ID al componente
        medicamentoElement.setAttribute('cantidad', medicamento.cantidad); // Agregar la cantidad al componente

        medicamentoElement.addEventListener('add-to-cart', (e) => {
          const id = e.target.getAttribute('id'); // Obtener el ID del medicamento
          const nombre = e.detail.nombre;
          console.log(`Se agregó al carrito el medicamento -> ID: ${id}, Nombre: ${nombre}`); // Mostrar en consola
          const cantidadDisponible = parseInt(e.target.getAttribute('cantidad')); // Obtener la cantidad disponible del medicamento
          const medicamentoEnCarrito = carrito.find(item => item.id === id);
          if (medicamentoEnCarrito) {
            if (medicamentoEnCarrito.cantidad < cantidadDisponible) {
              medicamentoEnCarrito.cantidad++;
            } else {
              console.warn(`No se puede agregar más ${nombre} al carrito. La cantidad máxima disponible es ${cantidadDisponible}`);
              alert(`¡El medicamento ${nombre} ha alcanzado su cantidad máxima disponible en el stock!`);
            }
          } else {
            carrito.push({ id, nombre, cantidad: 1 }); // Agregar el ID al carrito
          }
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
    listItem.textContent = `Nombre: ${item.nombre}, Cantidad: ${item.cantidad}`; // Mostrar solo el nombre en el carrito
    carritoList.appendChild(listItem);
  });
};

const enviarPedido = async () => {
  try {
    // Obtener los parámetros de la URL actual
    const urlParams = new URLSearchParams(window.location.search);
    const pacienteId = urlParams.getAll('id')[0]; // Obtener el primer valor de 'id' (correspondiente a 'paciente')
    const medicoId = urlParams.getAll('id')[1]; // Obtener el segundo valor de 'id' (correspondiente a 'medico')
    
    // Preparar los datos a enviar en el cuerpo del POST
    const datosPedido = {
      pacienteId,
      medicoId,
      items: carrito.map(item => ({ medicamentoId: item.id, cantidad: item.cantidad }))
    };

    // Mostrar el objeto que se enviará en el cuerpo del POST
    console.log('Datos a enviar:', datosPedido);

    const response = await fetch('http://localhost:3000/Formulas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(datosPedido),
    });

    // Mostrar la respuesta en consola
    response.json()
      .then((json) => console.log('Respuesta del servidor:', json));

    if (response.ok) {
      alert('Pedido enviado con éxito');
      carrito = [];
      actualizarCarrito();
    } else {
      console.error('Error al enviar el pedido:', response.statusText);
    }
  } catch (error) {
    console.error('Error al enviar el pedido:', error);
  }
};

window.onload = () => {
  displayMedicamentos();

  document.getElementById('enviar-pedido').addEventListener('click', enviarPedido);
};





