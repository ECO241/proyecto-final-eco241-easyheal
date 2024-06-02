document.addEventListener('DOMContentLoaded', async () => {
  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const params = parts[parts.length - 1].split('&');
  const nombreParam = params[0].replace(/_/g, ' ');
  const nombre = nombreParam.split('=')[1]; // Extraer solo el nombre sin el prefijo "paciente="
  const id = params[1];
  document.getElementById('paciente-nombre').textContent = nombre;

  try {
    const response = await fetch(`http://localhost:3000/Pacientes/${encodeURIComponent(nombre)}&${encodeURIComponent(id)}`);
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
    window.location.href = `http://localhost:3000/farmacoss?paciente=${encodeURIComponent(nombre)}&id=${encodeURIComponent(id)}`;
  });

  // Event listener para el botón de ver historial de fórmulas
  document.getElementById('ver-historial').addEventListener('click', () => {
    window.location.href = `http://localhost:3000/formulas/historial?paciente=${encodeURIComponent(nombre)}&id=${encodeURIComponent(id)}`;
  });
});
