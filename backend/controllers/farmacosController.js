

import farmacosService from "../services/farmacosService.js";


const farmacosController = {
  getAllFarmacos: async (req, res) => {
    try{
      const data = await farmacosService.getAllFarmacos();
      res.json({ success: true, data});
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"});      
    }
  },
  getFarmacoById: async (req, res) => {
    try{
      const data = await farmacosController.getFarmacoById(req.params.id);
      res.json({ success: true, data});      
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"}); 
    }
  },
  deleteFarmaco: async (req, res) => {
    try{
      await farmacosService.deleteFarmaco(req.params.id);
      res.json({ success: true, message: "Medicamento restado del inventario"});      
    } catch (error) {
      console.error("Error al restar medicamento del inventario", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"}); 
    }
  },
  
}

export default farmacosController;
