import { createClient } from "@supabase/supabase-js";
import QRCode from 'qrcode';

// Load environment variables from .env file
const supabaseUrl = "https://ooasfhbydmbskkbenbff.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYXNmaGJ5ZG1ic2trYmVuYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTg0MTEsImV4cCI6MjAzMTQ3NDQxMX0.V7gZtprb032YHfBlpZpaLTgqO9sdKfboEorIUxM5zgE";

// Create a new Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

const formulasService = {
  getAllFormulas: async () => {
    const { data, error } = await supabase
        .from("formulas")
        .select();
    if (error) {
        throw new Error(error.message);
    }
    return data;
  },

  getFormulasById: async (id) => {
    try {
        const { data, error } = await supabase
            .from("formulas")
            .select()
            .eq('id', id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
},

  getFormulasByPacienteId: async (idPaciente) => {
    try {
      const { data, error } = await supabase
        .from("formulas")
        .select()
        .eq('paciente_id', idPaciente);  
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },  

  createQRLink: (formulaId, pacienteId) => {
    const link = `http://localhost:3000/verformulamupi?id=${formulaId}&id_paciente=${pacienteId}`;
    return link;
  },

  createFormula: async (idMedicos, idPaciente, medicamentos) => {
    try {
      const { error, data } = await supabase
        .from("formulas")
        .insert({
          paciente_id: idPaciente,        
          doctor_id: idMedicos,
          medicamentos: medicamentos,        
        })
        .select();

        if (error) {
          console.log(error);
          throw new Error(error.message);
        }
  
        // Get the inserted formula's ID
        const formulaId = data[0].id;
  
        // Generate the QR code
        const qrData = formulasService.createQRLink(formulaId, idPaciente);
        const qrCodeDataUrl = await QRCode.toDataURL(qrData);
  
        // Convert the Data URL to a Base64 string
        const base64Data = qrCodeDataUrl.split(",")[1];
  
        // Update the formula with the QR code
        const { error: updateError } = await supabase
          .from("formulas")
          .update({ qr_code: base64Data })
          .eq("id", formulaId);
  
        if (updateError) {
          console.log(updateError);
          throw new Error(updateError.message);
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
      
    }, 

    fetchFormulaWithQRCode: async (id) => {
      const { data, error } = await supabase
        .from("formulas")
        .select("qr_code")
        .eq("id", id)
        .single();
  
      if (error) {
        throw new Error(error.message);
      }
  
      return data.qr_code;
    }
  };
  
export default formulasService;
