
import PacientesService from "../services/medicosService.js";

const medicosController = {
  getAllPacientes: async (req, res) => {
    try{
      const data = await PacientesService.getAllPacientes();
      res.json({ success: true, data});
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"});      
    }
  },
  getPacientesById: async (req, res) => {
    try{
      const data = await PacientesService.getPacientesById(req.params.id);
      res.json({ success: true, data});      
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"}); 
    }
  },}
export default medicosController