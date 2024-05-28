import formulasService from "../services/formulasService.js";

const formulasController = {
  getAllformulas: async (req, res) => {
    try{
      const data = await formulasService.getAllFormulas();
      res.json({ success: true, data});
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"});
    }
  },
  getFormulaById: async (req, res) => {
    try{
      const data = await formulasService.getFormulaById(req.params.id);
      res.json({ success: true, data});
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"});
    }
  },
  createFormula: async (req, res) => {
    try{
      await formulasService.createFormula(req.body);
      res.json({ success: true, message: "Formulada creada correctamente", });
    } catch (error) {
      console.error("Error al crear formula in supabase", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
}

export default formulasController;