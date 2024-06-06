document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch para obtener los datos del paciente desde la URL proporcionada
        const response = await fetch('http://localhost:3000/pacientes');
        const result = await response.json();

        if (result.success) {
            // Obtener el primer paciente de la lista (suponiendo que se devuelva solo uno)
            const paciente = result.data[0];
            const nombrePaciente = paciente.nombre.replace(/ /g, '_');
            const idPaciente = paciente.id;

            // Presentar el nombre del paciente en el elemento h1
            document.getElementById('bienvenida-paciente').textContent = `Bienvenido/a ${paciente.nombre}`;

            // Actualizar la URL con el nombre e id del paciente
            const newUrl = `http://localhost:3000/entradapaciente?paciente=${encodeURIComponent(nombrePaciente)}&id=${encodeURIComponent(idPaciente)}`;
            window.history.replaceState(null, null, newUrl);
        } else {
            console.error('Error al obtener el paciente:', result.error);
        }
    } catch (error) {
        console.error('Error al obtener los datos del paciente:', error);
    }
// Event listener para el botón de entrada
document.getElementById('seleccionar-paciente').addEventListener('click', () => {
    // Redirigir a la pantalla de médicos manteniendo los parámetros del médico
    const urlParams = new URLSearchParams(window.location.search);
    const nombrePaciente = urlParams.get('paciente');
    const idPaciente= urlParams.get('id');
    window.location.href = `http://localhost:3000/sobrelaapp?paciente=${encodeURIComponent(nombrePaciente)}&id=${encodeURIComponent(idPaciente)}`;
  });
   
});
