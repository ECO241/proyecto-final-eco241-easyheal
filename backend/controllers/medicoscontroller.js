import MedicosService from "../services/medicosService.js";


const medicosController = {
  getAllMedicos: async (req, res) => {
    try{
      const data = await MedicosService.getAllMedicos();
      res.json({ success: true, data});
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"});      
    }
  },
  
}


export default medicosController
