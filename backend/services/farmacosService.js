// database connection
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file
const supabaseUrl = "https://zrjdjepxphxshyrsseix.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyamRqZXB4cGh4c2h5cnNzZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MzQzODcsImV4cCI6MjAyOTMxMDM4N30.5J85VnIUUAcTIK0Q03EeUyHYHZbFG3ykhYBuSApJ2lU";

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
