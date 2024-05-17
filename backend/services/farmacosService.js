// database connection
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file

const supabaseUrl = "https://ooasfhbydmbskkbenbff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYXNmaGJ5ZG1ic2trYmVuYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTg0MTEsImV4cCI6MjAzMTQ3NDQxMX0.V7gZtprb032YHfBlpZpaLTgqO9sdKfboEorIUxM5zgE";


// Create a new Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

const farmacosService = {
  getAllFarmacos: async () => {
    const { data, error } = await supabase
        .from("farmacos")
        .select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getFarmacoById: async () => {
    const { data, error } = await supabase
      .from("farmacos")
      .select()
      .eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  deleteFarmaco: async (id) => {
    const { error } = await supabase
        .from("farmacos")
        .delete()
        .eq('id', id);
    if (error) {
        throw new Error(error.message)
    }
  },
};

export default farmacosService;
