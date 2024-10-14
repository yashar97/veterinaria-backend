import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import veterinarioRoutes from './routes/veterinario.routes.js'
import pacienteRoutes from './routes/paciente.routes.js'
import conectarDB from './db/db.js'

const app = express();
dotenv.config();

conectarDB();


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);


app.listen(8080, () => console.log('servidor listo'));
