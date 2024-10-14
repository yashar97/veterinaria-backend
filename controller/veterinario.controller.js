import VeterinarioModel from '../models/Veterinario.js'
import { hashPassword, checkPassword } from '../utils/bcrypt.js'
import generarCodigo from '../utils/generarCodigo.js'
import { generarJWT } from '../utils/JWT.js'



export const registrar = async (req, res) => {

    const { correo } = req.body;

    try {

        const existe = await VeterinarioModel.findOne({ correo });
        if (existe) {
            return res.status(409).json({ mensaje: 'El correo ya está registrado' });
        }

        const nuevoUsuario = req.body;

        nuevoUsuario.password = hashPassword(req.body.password);
        nuevoUsuario.codigo = generarCodigo();

        await VeterinarioModel.create(nuevoUsuario);

        return res.json({ mensaje: 'Registro exitoso' });


    } catch (error) {
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

export const login = async (req, res) => {

    const { correo, password } = req.body;

    try {

        const existe = await VeterinarioModel.findOne({ correo });
        if (!existe) {
            return res.status(404).json({ mensaje: 'El correo ingresado no está registrado' });
        }

        if (!checkPassword(password, existe.password)) {
            return res.status(403).json({ mensaje: 'Contraseña incorrecta' });
        }

        // creamos el objeto que vamos a enviar al frontend 
        const usuarioAutenticado = {
            _id: existe._id,
            correo: existe.correo,
            nombre: existe.nombre,
            apellido: existe.apellido,
            codigo: existe.codigo,
            mascotas: existe.mascotas,
            token: generarJWT(existe._id)
        }

        return res.json(usuarioAutenticado);

    } catch (error) {
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

}

export const obtenerPerfil = async (req, res) => {
    return res.json(req.veterinario);
}