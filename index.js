// Importación de los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');

// Creación de una instancia de la aplicación Express, definición del puerto y configuración del middleware
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // Middleware para analizar cuerpos de solicitudes JSON
app.use(express.static(__dirname + "/public")); // Middleware para servir archivos estáticos

// Manejo de solicitudes GET a las rutas 
app.get("/logo", (req, res) => res.sendFile(__dirname + "/app/pages/logo.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/app/pages/about.html"));
app.get("/reg", (req, res) => res.sendFile(__dirname + "/app/pages/register.html"));
app.get("/log", (req, res) => res.sendFile(__dirname + "/app/pages/login.html"));
app.get("/mensajdoc", (req, res) => res.sendFile(__dirname + "/app/pages/mensajesdoc.html"));
app.get("/recipac", (req, res) => res.sendFile(__dirname + "/app/pages/recibidorpac.html"));
app.get("/recifar", (req, res) => res.sendFile(__dirname + "/app/pages/recibidorfar.html"));
app.get("/historial", (req, res) => res.sendFile(__dirname + "/app/pages/historial.html"));
app.get("/estado", (req, res) => res.sendFile(__dirname + "/app/pages/estado.html"));

// Manejo de solicitudes POST a las rutas
app.post('/logo', (req, res) => res.send('Solicitud POST recibida'));
app.post('/login', (req, res) => res.send('Solicitud POST recibida'));
app.post('/loginpac', (req, res) => res.send('Solicitud POST recibida'));
app.post('/registro', (req, res) => res.send('Solicitud POST recibida'));
app.post('/aboutus', (req, res) => res.send('Solicitud POST recibida'));
app.post('/recibipac', (req, res) => res.send('Solicitud POST recibida'));
app.post('/recibifar', (req, res) => res.send('Solicitud POST recibida'));
app.post('/mensajedoc', (req, res) => res.send('Solicitud POST recibida'));
app.post('/historialf', (req, res) => res.send('Solicitud POST recibida'));
app.post('/estadof', (req, res) => res.send('Solicitud POST recibida'));

// Configuración del servidor para escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
