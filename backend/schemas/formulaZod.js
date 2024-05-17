import z from'zod';

const esquemaFormula = z.object({
  codigoQR: z.string(),
  nombreDoctor: z.string(),
  estado: z.string(),
  listaFarmaco: z.array(z.object({
    nombre: z.string(),
    cantidad: z.number(),
  })),
});

export {esquemaFormula};