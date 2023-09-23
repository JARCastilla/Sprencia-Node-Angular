const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

// Creación del token
const createToken = (usuarios) => {
  const obj = {
    usuarios_id: usuarios.id,
    usuarios_rol: usuarios.rol,
    exp: dayjs().add(1, 'weeks').unix(),
  };

  return jwt.sign(obj, process.env.SECRET_KEY);
}

module.exports = { createToken };