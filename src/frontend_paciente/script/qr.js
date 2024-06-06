import '../Components/qr.js';

const displayFormulas = async () => {
  const formulaList = document.getElementById('formula-list');
  formulaList.innerHTML = '';

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const formulaId = urlParams.get('id');
    console.log(`Valor de formulaId: ${formulaId}`);

    const response = await fetch(`http://localhost:3000/formulas/detalleformula/${formulaId}`);
    const result = await response.json();

    if (result.success) {
      const formula = result.data;

      // Asegúrate de que result.data es un objeto
      if (typeof formula === 'object') {
        // Agregar el número de fórmula
        const formulaNumber = document.createElement('h2');
        formulaNumber.textContent = `Fórmula ${formulaId}`;
        formulaList.appendChild(formulaNumber);

        const formulaLink = document.createElement('p');
        formulaLink.href = `http://localhost:3000/detalleformula/${formula.id}`;
        formulaLink.style.display = 'block';

        const qrImg = document.createElement('img');
        qrImg.src = `data:image/png;base64,${formula.qr_code}`;
        qrImg.style.maxWidth = '100%';
        formulaLink.appendChild(qrImg);

        const medList = document.createElement('div');
        medList.className = 'medicamentos';
        medList.innerHTML = `
          <p class="item"><span><strong>Nombre</strong></span> <span><strong>Cantidad</strong></span></p>
          ${formula.medicamentos.map(med => `
            <p class="item"><span>${med.nombre}</span> <span>${med.cantidad}</span></p>
          `).join('')}
        `;

        formulaLink.appendChild(medList);

        formulaList.appendChild(formulaLink);
      } else {
        console.error('Error: result.data no es un objeto', result.data);
      }
    } else {
      console.error('Error al obtener las fórmulas:', result.error);
    }
  } catch (error) {
    console.error('Error al obtener las fórmulas:', error);
  }
};

window.onload = () => {
  displayFormulas();

  document.getElementById('back').addEventListener('click', () => {
    window.history.back();
  });

  document.getElementById('notifications').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/notificaciones??paciente=Lucia_Villa&id=288e1278-a373-4066-977c-517aba1dc005';
  });
}
