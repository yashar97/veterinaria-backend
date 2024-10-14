import { Router } from 'express'
import { registrar, login, obtenerPerfil } from '../controller/veterinario.controller.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Router();


router.post('/registrar', registrar);
router.post('/login', login);
router.get('/perfil', checkAuth, obtenerPerfil);

export default router;