import { Router } from 'express'
import checkAuth from '../middleware/checkAuth.js';
import { nuevoPaciente, eliminarPaciente, obtenerPacientes } from '../controller/paciente.controller.js'

const router = Router();

router.post('/', checkAuth, nuevoPaciente);
router.delete('/:id', checkAuth, eliminarPaciente);
router.get('/', checkAuth, obtenerPacientes);


export default router;