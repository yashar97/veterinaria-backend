import VeterinarioModel from '../models/Veterinario.js'
import { verificarJWT } from '../utils/JWT.js'

const checkAuth = async (req, res, next) => {

    if (req.headers.authorization) {

        const token = req.headers.authorization.split(' ')[1];

        try {

            const { id } = verificarJWT(token);

            const veterinario = await VeterinarioModel.findById(id).select('-password -__v -createdAt -updatedAt');

            req.veterinario = veterinario;
            return next();

        } catch (error) {

            return res.status(409).json({ msg: 'No autenticado' });

        }

    }

    return res.status(409).json({ msg: 'No autenticado' });

}

export default checkAuth