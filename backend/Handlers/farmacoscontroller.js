const supabase = require("../utils/supabase"); // Importa el cliente de Supabase
const esquemaMedicamento = require("../schemas/drugZod");

const reducirInventario = async (medicamentos) => {
  try {
    // Recorre la lista de medicamentos en la fórmula
    for (const medicamento of medicamentos) {
      const { nombre, cantidad } = medicamento;

      // Consulta el medicamento en la base de datos para obtener su cantidad actual
      const { data: medicamentoActual } = await supabase
        .from("farmacos")
        .select("cantidad")
        .eq("nombre", nombre)
        .single();

      if (!medicamentoActual) {
        throw new Error(
          `El medicamento ${nombre} no se encontró en el inventario.`
        );
      }

      // Calcula la nueva cantidad del medicamento en inventario
      const nuevaCantidad = medicamentoActual.cantidad - cantidad;

      if (nuevaCantidad < 0) {
        throw new Error(
          `No hay suficientes existencias del medicamento ${nombre}.`
        );
      }

      // Actualiza la cantidad del medicamento en inventario en la base de datos
      await supabase
        .from("farmacos")
        .update({ cantidad: nuevaCantidad })
        .eq("nombre", nombre);
    }
  } catch (error) {
    console.error("Error al reducir el inventario de medicamentos:", error);
    throw error;
  }
};

module.exports = { reducirInventario };
