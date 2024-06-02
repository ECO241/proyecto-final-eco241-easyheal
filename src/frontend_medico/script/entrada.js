document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Fetch para obtener un solo médico
      const response = await fetch('http://localhost:3000/medicos');
      const result = await response.json();
  
      if (result.success) {
        // Obtener el primer médico de la lista (suponiendo que se devuelva solo uno)
        const medico = result.data[0];
        const nombreMedico = medico.nombre.replace(/ /g, '_');
        const idMedico = medico.id;
  
        // Presentar el nombre del médico en el elemento h1
        document.getElementById('bienvenida-doc').textContent = `Bienvenido doctor@ ${medico.nombre}`;
  
        // Actualizar la URL con el nombre e id del médico
        const newUrl = `http://localhost:3000/entrada?medico=${encodeURIComponent(nombreMedico)}&id=${encodeURIComponent(idMedico)}`;
        window.history.replaceState(null, null, newUrl);
      } else {
        console.error('Error al obtener el médico:', result.error);
      }
    } catch (error) {
      console.error('Error al obtener los datos del médico:', error);
    }
  
    // Event listener para el botón de entrada (opcional)
    document.getElementById('seleccionar-doc').addEventListener('click', () => {
      // Aquí puedes añadir la lógica para redirigir a otra página si es necesario
    });
  });
  