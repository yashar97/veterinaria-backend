import jwt from 'jsonwebtoken'

export const generarJWT = id => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

export const verificarJWT = token => {
    return jwt.verify(token, process.env.SECRET_KEY);
}
