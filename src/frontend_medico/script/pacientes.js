const displayPacientes = async () => {
    const pacientesList = document.getElementById('pacientes-list');
    pacientesList.innerHTML = '';
  
    try {
      const response = await fetch('http://localhost:3000/Medicos');
      const result = await response.json();
  
      if (result.success) {
        const pacientes = result.data;
        pacientes.forEach(paciente => {
          const pacienteElement = document.createElement('li');
          pacienteElement.textContent = paciente.nombre;
          pacienteElement.style.cursor = 'pointer';
          pacienteElement.addEventListener('click', () => {
            window.location.href = `medicoss/${encodeURIComponent(paciente.nombre)}`;
          });
          
          pacientesList.appendChild(pacienteElement);
        });
      } else {
        console.error('Error al obtener los pacientes:', result.error);
      }
    } catch (error) {
      console.error('Error al obtener los pacientes:', error);
    }
  };
  
  window.onload = () => {
    displayPacientes();
  };
  