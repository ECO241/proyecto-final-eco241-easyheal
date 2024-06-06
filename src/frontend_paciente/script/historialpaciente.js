import '../Components/historial.js';

const displayHistorial = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const pacienteId = urlParams.get('id'); // Obtener el valor del parámetro 'id' de la URL
    
        console.log(`Valor de pacienteId: ${pacienteId}`);

        // Obtener la referencia al elemento donde se mostrarán los historiales
        const historialList = document.getElementById('historial-list');

        const response = await fetch(`http://localhost:3000/formulas/paciente/${pacienteId}`);
        const result = await response.json();

        if (result.success) {
            const historiales = result.data; // Obtener la lista de historiales

            historiales.forEach((historial, index) => {
                // Crear un contenedor para el historial
                const historialContainer = document.createElement('div');
            
                // Crear un div con el número de la fórmula

                const formulaDiv = document.createElement('div');
                formulaDiv.textContent = `Fórmula ${index + 1}`;
                formulaDiv.classList.add('formula', 'formula-item');
            
                formulaDiv.addEventListener('click', () => {
                    // Redirigir a la página de detalles del historial al hacer clic
                    window.location.href = `http://localhost:3000/detalleformula?id=${historial.id}`;
                });
            
                // Agregar el div de la fórmula al contenedor del historial
                historialContainer.appendChild(formulaDiv);
            
                // Agregar el contenedor del historial al historialList
                historialList.appendChild(historialContainer);
            
                // Crear un espacio entre historiales
                const espacio = document.createElement('div');
                espacio.style.height = '20px'; // Puedes ajustar el tamaño del espacio según tus necesidades
                historialList.appendChild(espacio);
            });
            
            
            
        } else {
            console.error('No hay historiales disponibles para este paciente.');
        }
    } catch (error) {
        console.error('Error al obtener los historiales:', error);
    }
};

window.onload = async () => {
    await displayHistorial();
    document.getElementById('back').addEventListener('click', () => {
        window.history.back();
      });
    }