// database connection
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file
const supabaseUrl = "https://ooasfhbydmbskkbenbff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYXNmaGJ5ZG1ic2trYmVuYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTg0MTEsImV4cCI6MjAzMTQ3NDQxMX0.V7gZtprb032YHfBlpZpaLTgqO9sdKfboEorIUxM5zgE";

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

  getFormulasById: async () => {
    const { data, error } = await supabase
        .from("formulas")
        .select()
        .eq('id', id);
    if (error) {
        throw new Error(error.message);
    }
    return data;
  },

  createFormula: async (id, idMedicos, idPaciente, medicamentos) => {
    try {
      const { error } = await supabase
        .from("formulas")
        .insert({
        id: 1,
        idMedicos: "Denmark",
        idPaciente: "",
        medicamentos: [{

        }],
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default formulasService;
