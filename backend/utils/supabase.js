const createClient  = require('@supabase/supabase-js');

// Configura el cliente de Supabase con tu URL y clave de API
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-public-api-key';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
