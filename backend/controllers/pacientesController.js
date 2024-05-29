

import esquemaUsuario from "../schemas/userZod.js";


const registrarPaciente = async (req, res) => {
  const { nombre, email, contraseña, tipoUsuario } = req.body;

  try {
    // Validar los datos del paciente utilizando Zod
    const pacienteData = esquemaUsuario.parse(req.body);

    // Registrar al paciente en Supabase
    const { user, error } = await supabase.auth.signUp({
      email: pacienteData.correo,
      password: pacienteData.contraseña,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Almacenar otros datos del paciente en una tabla personalizada en Supabase
    const { data, insertError } = await supabase
      .from("usuarios")
      .insert({
        nombre: pacienteData.nombre,
        email: pacienteData.correo,
        tipoUsuario,
      });

    if (insertError) {
      return res.status(500).json({ error: "Error al registrar el paciente." });
    }

    res.status(201).json({ mensaje: "Paciente registrado exitosamente." });
  } catch (error) {
    console.error("Error al registrar paciente:", error);
    res.status(400).json({ error: error.errors });
  }
};

const loginPaciente = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Autenticar al paciente utilizando Supabase
    const { user, error } = await supabase.auth.signIn({
      email,
      password: contraseña,
    });

    if (error) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    res.status(200).json({ mensaje: "Inicio de sesión exitoso." });
  } catch (error) {
    console.error("Error al iniciar sesión del paciente:", error);
    res.status(500).json({ error: "Ocurrió un error al iniciar sesión." });
  }
};

export { registrarPaciente, loginPaciente };
