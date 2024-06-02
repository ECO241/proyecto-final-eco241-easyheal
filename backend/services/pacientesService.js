// database connection
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file

const supabaseUrl = "https://ooasfhbydmbskkbenbff.supabase.co";
const supabaseKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYXNmaGJ5ZG1ic2trYmVuYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTg0MTEsImV4cCI6MjAzMTQ3NDQxMX0.V7gZtprb032YHfBlpZpaLTgqO9sdKfboEorIUxM5zgE";


const supabase = createClient(supabaseUrl, supabaseKey);

  const PacientesService = {
    getAllPacientes: async () => {
      const { data, error } = await supabase
          .from("pacientes")
          .select();
      if (error) {
          throw new Error(error.message);
      }
      return data;
    },
  
    getPacientesById: async () => {
      const { data, error } = await supabase
          .from("pacientes")
          .select()
          .eq('id', id);
      if (error) {
          throw new Error(error.message);
      }
      return data;
    },
  };
  
  export default PacientesService;