import esquemaUsuario from "../schemas/userZod.js";

const registrarMedico = async (req, res) => {
  const { nombre, email, contraseña, tipoUsuario } = req.body;

  try {
    // Validar los datos del médico utilizando Zod
    const medicoData = esquemaUsuario.parse(req.body);

    // Registrar al médico en Supabase
    const { user, error } = await supabase.auth.signUp({
      email: medicoData.correo,
      password: medicoData.contraseña,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Almacenar otros datos del médico en una tabla personalizada en Supabase
    const { data, insertError } = await supabase
      .from('medicos')
      .insert({ nombre: medicoData.nombre, email: medicoData.correo, tipoUsuario });

    if (insertError) {
      return res.status(500).json({ error: 'Error al registrar al médico.' });
    }

    res.status(201).json({ mensaje: "Médico registrado exitosamente." });
  } catch (error) {
    console.error("Error al registrar al médico:", error);
    res.status(400).json({ error: error.errors });
  }
};

const loginMedico = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Autenticar al médico utilizando Supabase
    const { user, error } = await supabase.auth.signIn({
      email,
      password: contraseña,
    });

    if (error) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

    res.status(200).json({ mensaje: "Inicio de sesión exitoso." });
  } catch (error) {
    console.error("Error al iniciar sesión del médico:", error);
    res.status(500).json({ error: "Ocurrió un error al iniciar sesión." });
  }
};

export { registrarMedico, loginMedico };