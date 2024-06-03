import z from'zod';

const esquemaMedicamento = z.object({
    nombre: z.string(),
    codigo: z.string(),
    tipo: z.string(),
    cantidad: z.number(),
    precio_unitario: z.number(),
});

export {esquemaMedicamento}

