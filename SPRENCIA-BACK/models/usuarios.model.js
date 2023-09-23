//Seleccionar por id
const getById = (usuariosId) => {
  return db.query('SELECT * FROM sprencia.usuarios where id = ?', [usuariosId]);
}



// Seleccionar por actividades hechas por usuario
const getActivityDone = (usuariosId) => {
  return db.query('SELECT a.title FROM sprencia.usuarios as u inner join actividades as a on u.actividad_id_done = a.id where u.id = ?',
    [usuariosId])
}

//Seleccionar por rol
const getByRol = (rol) => {
  return db.query('select * from usuarios where rol = ?', [rol]);
};

//Traer nombre por rol
const getNameByRol = () => {
  return db.query('select * from sprencia.usuarios name where rol = ?', [rol]);
};

// Recuperar por email
const getByEmail = (email) => {
  return db.query('select * from usuarios where email = ?', [email]);
};

//Crear un usuario
const create = ({ nombre, apellido, email, password, ciudad, fecha_cumple, rol = 'usuario'}) => {
  return db.query(
    'insert into usuarios (nombre, apellido, email, password, ciudad, fecha_cumple, rol) values (?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellido, email, password, ciudad, fecha_cumple, rol]
  );
};

const createAdmin = ({ nombre, apellido, email, password, ciudad, fecha_cumple, rol = 'administrador' }) => {
  return db.query(
    'insert into usuarios (nombre, apellido, email, password, ciudad, fecha_cumple, rol) values (?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellido, email, password, ciudad, fecha_cumple, rol]
  );
};

// Establecer la nueva contraseña
const changePassword = (id, { newPassword }) => {
  return db.query('update usuarios set password = ? where id = ?', [newPassword, id]);
};



module.exports = {
  getActivityDone,
  getById,
  create,
  createAdmin,
  getByEmail,
  changePassword,
  getByRol,
  getNameByRol
};