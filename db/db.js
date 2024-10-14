import mongoose from "mongoose";

const conectarDB = async () => {

    try {

        mongoose.connect('mongodb+srv://yasharg97:eeVjILWsCgdtzUsx@cluster0.d6m1x.mongodb.net/Veterinaria?retryWrites=true&w=majority&appName=Cluster0')
            .then(() => console.log('db conectada'))

    } catch (error) {
        console.log(error.message);
    }

}

export default conectarDB;