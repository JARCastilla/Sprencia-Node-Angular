//const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

// Destructuring extrayendo getById de users
const { getById } = require('../models/usuarios.model');

// Comprobamos que el token está incluído en la cabecera y que es correcto
const checkToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({ error: 'Debes incluir una cabecera de autorización' });
  }

  const token = req.headers.authorization;
  let obj;
  try {
    obj = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return res.json({ error: 'Token incorrecto' });
  }
  const [result] = await getById(obj.usuarios_id);
  req.usuarios = result[0];
  next();
}



const checkAdmin = (req, res, next) => {

  if (req.usuarios.rol !== 'administrador') {
    return res.json({ fatal: 'Zona solo para administradores' });
  }
  next();
}


module.exports = { checkToken, checkAdmin };
