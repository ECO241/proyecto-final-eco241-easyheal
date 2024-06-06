import '../components/formulamupi.js';

const displayFormulas = async () => {
  
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const formulaId = urlParams.get('id');
    console.log(`ID de la fórmula: ${formulaId}`);
 
    const formulaList = document.getElementById('formula-list');
 
    const response = await fetch(`http://localhost:3000/formulas/detalleformula/${formulaId}`);
    const result = await response.json();

    if (result.success) {
      const formula = result.data;

      const formulaElement = document.createElement('mi-formula');
      formulaElement.setAttribute('medicamentos', JSON.stringify(formula.medicamentos));

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
  document.getElementById('atras').addEventListener('click', () => {
    window.history.back();
  });

  document.getElementById('solicitud').addEventListener('click', () => {
    window.location.href = '../screens/ordensolicitada.html';
  });

};