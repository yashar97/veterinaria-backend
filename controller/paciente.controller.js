import PacienteModel from '../models/Paciente.js'

export const nuevoPaciente = async (req, res) => {

    let pacientes = req.body;

    pacientes = pacientes.map(paciente => {
        paciente.veterinario = req.veterinario._id;
        return paciente;
    });

    pacientes.forEach(async paciente => {

        if (paciente.id) {
            const { id, ...resto } = paciente;

            try {

                await PacienteModel.create(resto);

                return res.json({});

            } catch (error) {
                return res.status(500).json({ mensaje: 'Error interno del servidor' });
            }
        }

    });
}

export const eliminarPaciente = async (req, res) => {

    const { id } = req.params;

    try {

        await PacienteModel.deleteOne({ _id: id });

        const pacientes = await PacienteModel.find({ veterinario: req.veterinario._id });

        return res.json(pacientes);

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

}

export const obtenerPacientes = async (req, res) => {

    const veterinario = req.veterinario._id;

    try {

        const pacientes = await PacienteModel.find({ veterinario });

        return res.json(pacientes);

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensaje: 'Error interno del servidor' });

    }

}