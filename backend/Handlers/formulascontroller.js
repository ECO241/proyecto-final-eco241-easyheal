const supabase  = require("../utils/supabase"); // Importa el cliente de Supabase
const esquemaFormula = require("../schemas/formulaZod");

const crearFormula = async (req, res) => {
  const { codigoQR, nombreDoctor, estado, listaFarmaco } = req.body;

  try {
    // Validar los datos de la fórmula utilizando Zod
    const formulaData = esquemaFormula.parse(req.body);

    // Almacenar la fórmula en una tabla personalizada en Supabase
    const { data, error } = await supabase
      .from("formulas")
      .insert({ codigoQR, nombreDoctor, estado, listaFarmaco });

    if (error) {
      return res.status(500).json({ error: "Error al crear la fórmula." });
    }

    res.status(201).json({ mensaje: "Fórmula creada exitosamente." });
  } catch (error) {
    console.error("Error al crear la fórmula:", error);
    res.status(400).json({ error: error.errors });
  }
};

// Otras funciones del controlador de fórmulas...

module.exports = { crearFormula };
