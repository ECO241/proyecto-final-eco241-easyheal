const { createClient }  = require('@supabase/supabase-js');

// Configura el cliente de Supabase con tu URL y clave de API
const supabaseUrl = 'https://zrjdjepxphxshyrsseix.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyamRqZXB4cGh4c2h5cnNzZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MzQzODcsImV4cCI6MjAyOTMxMDM4N30.5J85VnIUUAcTIK0Q03EeUyHYHZbFG3ykhYBuSApJ2lU';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
