const z = require('zod')

const esquemaLogin = z.object({
    uid: z.string(),
    correo: z.string(),
    contraseña: z.string()
});

module.exports = esquemaLogin