document.addEventListener('DOMContentLoaded', async () => {
  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const params = parts[parts.length - 1].split('&');
  const nombreParam = params[0].split('=')[1].replace(/%20/g, ' '); // Corregir para eliminar los porcentajes
  const id = params[1].split('=')[1]; // Corregir para obtener el ID sin el prefijo "id="
  const nombreSinGuionBajo = nombreParam.replace(/_/g, ' '); // Eliminar guiones bajos del nombre
  document.getElementById('paciente-nombre').textContent = nombreSinGuionBajo;

  try {
    const response = await fetch(`http://localhost:3000/Pacientes/${encodeURIComponent(nombreParam)}&${encodeURIComponent(id)}`);
    const result = await response.json();
    if (result.success) {
      const paciente = result.data;
      document.getElementById('paciente-detalles').textContent = JSON.stringify(paciente);
    } else {
      console.error('Error al obtener los detalles del paciente:', result.error);
    }
  } catch (error) {
    console.error('Error al obtener los detalles del paciente:', error);
  }

  // Event listener para el botón de crear fórmula
  document.getElementById('crear-formula').addEventListener('click', () => {
    const medicoNombre = params[2].split('=')[1];
    const medicoId = params[3].split('=')[1];
    window.location.href = `http://localhost:3000/farmacoss?paciente=${encodeURIComponent(nombreParam)}&id=${encodeURIComponent(id)}&medico=${encodeURIComponent(medicoNombre)}&id=${encodeURIComponent(medicoId)}`;
  });

  document.getElementById('ver-historial').addEventListener('click', () => {
    const medicoNombre = params[2].split('=')[1];
    const medicoId = params[3].split('=')[1];
    window.location.href = `http://localhost:3000/formulass/historial?paciente=${encodeURIComponent(nombreParam)}&id=${encodeURIComponent(id)}&medico=${encodeURIComponent(medicoNombre)}&id=${encodeURIComponent(medicoId)}`;
  });

  document.getElementById('back').addEventListener('click', () => {
    window.history.back();
  });
  document.getElementById('next').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/entrada?medico=Luis_Tobar&id=f5a95abc-e4bc-4c1c-a590-e5d6e9b9c5f0';
  });
  
  
});



