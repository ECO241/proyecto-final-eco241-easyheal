const displayPacientes = async () => {
  const pacientesList = document.getElementById('pacientes-list');
  pacientesList.innerHTML = '';

  document.getElementById('back').addEventListener('click', () => {
    window.history.back();
  });
  
  document.getElementById('next').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/entrada?medico=Luis_Tobar&id=f5a95abc-e4bc-4c1c-a590-e5d6e9b9c5f0';
  });
  
  try {
    const response = await fetch('http://localhost:3000/Pacientes');
    const result = await response.json();

    if (result.success) {
      const pacientes = result.data;
      pacientes.forEach(paciente => {
        const pacienteElement = document.createElement('li');
        pacienteElement.textContent = paciente.nombre;
        pacienteElement.style.cursor = 'pointer';
        pacienteElement.addEventListener('click', () => {
          const nombrePaciente = paciente.nombre.replace(/ /g, '_');
          const idPaciente = paciente.id;
          const urlParams = new URLSearchParams(window.location.search);
          const medicoNombre = urlParams.get('medico');
          const medicoId = urlParams.get('id');
          const newUrl = `medicoss/paciente=${encodeURIComponent(nombrePaciente)}&id=${encodeURIComponent(idPaciente)}&medico=${encodeURIComponent(medicoNombre)}&id=${encodeURIComponent(medicoId)}`;
          window.location.href = newUrl;
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
