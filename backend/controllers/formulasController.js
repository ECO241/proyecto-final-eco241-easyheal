import formulasService from "../services/formulasService.js";
import QRCode from 'qrcode';

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
      const data = await formulasService.getFormulaById(req.body.pacienteId);
      res.json({ success: true, data});      
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error"}); 
    }
  },
  getFormulasByPacienteId: async (req, res) => {
    try {
      const idPaciente = req.params.id; // Obtener el ID del paciente de los parámetros de la solicitud
      const data = await formulasService.getFormulasByPacienteId(idPaciente);
      res.json({ success: true, data }); // Enviar la respuesta JSON con las fórmulas del paciente
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" }); // Enviar una respuesta de error en caso de problemas
    }
  },
  getUltimaFormulaByPacienteId: async (req, res) => {
    try {
      const idPaciente = req.params.id; // Obtener el ID del paciente de los parámetros de la solicitud
      const data = await formulasService.getUltimaFormulaByPacienteId(idPaciente);
      res.json({ success: true, data }); // Enviar la respuesta JSON con la última fórmula del paciente
    } catch (error) {
      console.error("Error retrieving data from Supabase:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" }); // Enviar una respuesta de error en caso de problemas
    }
  },
  createFormula: async (req, res) => {
    try {
      const formula = await formulasService.createFormula(req.body.medicoId, req.body.pacienteId, req.body.items);
      // Devuelve el ID de la fórmula recién creada junto con la respuesta
      res.json({ success: true, formulaId: formula.id });
    } catch (error) {
      console.error("Error al crear formula en Supabase", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  
  getUltimaFormulaConQR: async (req, res) => {
    try {
      const { idPaciente } = req.params;
      const formulas = await formulasService.getFormulasByPacienteId(idPaciente);

      if (!formulas || formulas.length === 0) {
        return res.status(404).json({ success: false, error: 'No formulas found' });
      }

      formulas.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const formulaMasReciente = formulas[0];

      const qrCodeDataURL = await QRCode.toDataURL(formulaMasReciente.qr_code);
      formulaMasReciente.qrCodeImage = qrCodeDataURL;

      res.json({ success: true, data: formulaMasReciente });
    } catch (error) {
      console.error('Error retrieving data from Supabase:', error.message);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
};




  
export default formulasController;
