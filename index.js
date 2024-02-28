// Importación de los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');

// Creación de una instancia de la aplicación Express, definición del puerto y configuración del middleware
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analizar cuerpos de solicitudes de formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use(express.static(__dirname + "/public"));


// Manejo de solicitudes GET a las rutas 
app.get("/", (req, res) => res.sendFile(__dirname + "/app/pages/logo.html"));
app.get("/acerca", (req, res) => res.sendFile(__dirname + "/app/pages/about.html"));
app.get("/registro", (req, res) => res.sendFile(__dirname + "/app/pages/register.html"));
app.get("/iniciar-sesion", (req, res) => res.sendFile(__dirname + "/app/pages/login.html"));
app.get("/recibidor/doctor", (req, res) => res.sendFile(__dirname + "/app/pages/recibidordoc.html"));
app.get("/recibidor/paciente", (req, res) => res.sendFile(__dirname + "/app/pages/recibidorpac.html"));
app.get("/recibidor/farmacia", (req, res) => res.sendFile(__dirname + "/app/pages/recibidorfar.html"));
app.get("/pacientes", (req, res) => res.sendFile(__dirname + "/app/pages/pacientesdeldoc.html"));

// Manejo de solicitudes POST a las rutas
app.post('/recibidor/paciente', (req, res) => res.send('Solicitud POST recibida'));
app.post('/recibidor/farmacia', (req, res) => res.send('Solicitud POST recibida'));
app.post('/recibidor/doctor', (req, res) => res.send('Solicitud POST recibida'));


// Arreglos para almacenar registros de usuarios
let pacientes = [];
let doctores = [];
let farmacias = [];

// Variable para generar IDs únicos
let idCounter = 1;


//--REGISTER--//

// Función para verificar si un correo electrónico está registrado en algún arreglo de usuarios
function correoRegistrado(correo) {
    return pacientes.some(user => user.correo === correo) ||
           doctores.some(user => user.correo === correo) ||
           farmacias.some(user => user.correo === correo);
}

// Manejo de solicitud POST para el registro de usuarios
app.post('/registrar-usuario', (req, res) => {
    // Extraer los datos del cuerpo de la solicitud
    const { rol, nombre, correo, contraseña, repetir_contraseña } = req.body;
    
    // Verificar que los campos estén llenos
    if (!nombre || !correo || !contraseña || !repetir_contraseña || !rol) {
        return res.status(400).send('Por favor, complete todos los campos.');
    }

    // Verificar que las contraseñas coincidan
    if (contraseña !== repetir_contraseña) {
        return res.status(400).send('<script>alert("Las contraseñas no coinciden."); window.location="/registro";</script>');
    }

    // Verificar que la contraseña tenga al menos 8 caracteres
    if (contraseña.length < 8) {
        return res.status(400).send('<script>alert("La contraseña debe tener al menos 8 caracteres."); window.location="/registro";</script>');
    }

    // Verificar si el correo electrónico ya está registrado
    if (correoRegistrado(correo)) {
        return res.send('<script>alert("El correo electrónico ya está registrado."); window.location="/registro";</script>');
    }

    // Verificar si el correo electrónico ya está registrado en el arreglo correspondiente según su rol
    let usuariosRegistrados;
    switch (rol) {
        case 'paciente':
            usuariosRegistrados = pacientes;
            break;
        case 'doctor':
            usuariosRegistrados = doctores;
            break;
        case 'farmacia':
            usuariosRegistrados = farmacias;
            break;
        default:
            return res.status(400).send('Tipo de usuario no válido');
    }

    // Crear un nuevo objeto de usuario con un ID único
    const nuevoUsuario = { id: idCounter++, nombre, contraseña, rol, correo };

    // Agregar el nuevo usuario al arreglo correspondiente según su rol
    usuariosRegistrados.push(nuevoUsuario);

    // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
    res.redirect('/iniciar-sesion');
});


// Ruta para obtener los registros de usuarios (VER EN LA API)
app.get('/api/usuarios', (req, res) => {
    const registros = {
        pacientes: pacientes,
        doctores: doctores,
        farmacias: farmacias
    };
    res.json(registros);
});

//--LOGIN--//

app.post('/inicio-sesion', (req, res) => {
    const { correo, contraseña } = req.body;

    // Verificar si las credenciales coinciden con algún usuario registrado en alguno de los arreglos según su rol
    let usuario;
    [pacientes, doctores, farmacias].some(usuariosRegistrados => {
        usuario = usuariosRegistrados.find(user => user.correo === correo && user.contraseña === contraseña);
        return usuario;
    });

    if (!usuario) {
        return res.status(401).send('<script>alert("Credenciales incorrectas. Inténtelo de nuevo."); window.location="/inicio-sesion";</script>');
    }

// Redirigir al usuario a la página correspondiente según su tipo de usuario

switch (usuario.rol) {
    case 'paciente':
        res.redirect(`/recibidor/paciente?id=${usuario.id}&nombre=${usuario.nombre}`);
        break;
    case 'doctor':
        res.redirect(`/recibidor/doctor?id=${usuario.id}&nombre=${usuario.nombre}`); // Pasar también el nombre del doctor
        break;
    case 'farmacia':
        res.redirect(`/recibidor/farmacia?id=${usuario.id}&nombre=${usuario.nombre}`);
        break;
    default:
        res.status(500).send('Error interno del servidor');
}


});
// Configuración del servidor para escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});