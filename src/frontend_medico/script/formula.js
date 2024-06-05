import '../Components/formula.js';

const displayFormulas = async () => {
  const formulaList = document.getElementById('formula-list');
  formulaList.innerHTML = '';

  try {
 // Obtener el pacienteId de la URL
 const pacienteId = window.location.href.split('/').pop(); // Obtener el último segmento de la URL (pacienteId)

 console.log(`Valor de pacienteId: ${pacienteId}`);

 // Realizar la solicitud para obtener las fórmulas del paciente
 const response = await fetch(`http://localhost:3000/formulas/paciente/${pacienteId}`);
 const result = await response.json();



    if (result.success) {
      const formulas = result.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const formulaMasReciente = formulas[0];

      const formulaElement = document.createElement('mi-formula');
      formulaElement.setAttribute('qr_code', formulaMasReciente.qr_code);
      formulaElement.setAttribute('medicamentos', JSON.stringify(formulaMasReciente.medicamentos));

      const qrImg = document.createElement('img');
      qrImg.src = `data:image/png;base64,${formulaMasReciente.qr_code}`;
      formulaElement.appendChild(qrImg);

      formulaList.appendChild(formulaElement);
    } else {
      console.error('Error al obtener las fórmulas:', result.error);
    }
  } catch (error) {
    console.error('Error al obtener las fórmulas:', error);
  }
};

window.onload = () => {
  displayFormulas();
};
