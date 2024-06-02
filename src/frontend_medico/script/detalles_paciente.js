document.addEventListener('DOMContentLoaded', async () => {
    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const nombre = decodeURIComponent(parts[parts.length - 1]);
    document.getElementById('paciente-nombre').textContent = nombre;

    try {
      const response = await fetch(`http://localhost:3000/Medicos/${nombre}`);
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
      window.location.href = `http://localhost:3000/farmacoss?paciente=${encodeURIComponent(nombre)}`;
    });

    // Event listener para el botón de ver historial de fórmulas
    document.getElementById('ver-historial').addEventListener('click', () => {
      window.location.href = `http://localhost:3000/formulas/historial?paciente=${encodeURIComponent(nombre)}`;
    });
  });