document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch para obtener la lista de pacientes
        const response = await fetch('http://localhost:3000/pacientes');
        const result = await response.json();

        if (result.success) {
            // Obtener el primer paciente de la lista (suponiendo que se devuelva solo uno)
            const paciente = result.data[0];
            const nombrePaciente = paciente.nombre.replace(/ /g, '_');
            const idPaciente = paciente.id;

            // Presentar el nombre del paciente en el elemento h1
            document.getElementById('bienvenida-pac').textContent = `Bienvenido ${paciente.nombre}`;

            // Actualizar la URL con el nombre e id del paciente
            const newUrl = `http://localhost:3000/entrada?paciente=${encodeURIComponent(nombrePaciente)}&id=${encodeURIComponent(idPaciente)}`;
            window.history.replaceState(null, null, newUrl);
        } else {
            console.error('Error al obtener el paciente:', result.error);
        }
    } catch (error) {
        console.error('Error al obtener los datos del paciente:', error);
    }

    // Event listener para el botón de selección de paciente
    document.getElementById('seleccionar-pac').addEventListener('click', () => {
        // Redirigir a la pantalla de pacientes manteniendo los parámetros del paciente
        const urlParams = new URLSearchParams(window.location.search);
        const nombrePaciente = urlParams.get('paciente');
        const idPaciente = urlParams.get('id');
        window.location.href = `http://localhost:3000/pacientess?paciente=${encodeURIComponent(nombrePaciente)}&id=${encodeURIComponent(idPaciente)}`;
    });
});
