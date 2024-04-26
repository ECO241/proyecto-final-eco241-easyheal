const z = require('zod')

const esquemaRegister = z.object({
    uid: z.string(),
    nombre:z.string(),
    correo: z.string(),
    contraseña: z.string(),
    rol: z.string()
});

module.exports = esquemaRegister