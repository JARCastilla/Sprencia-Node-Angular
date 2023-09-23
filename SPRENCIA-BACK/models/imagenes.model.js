const getByActividadesId = (actividadesId) => {
  return db.query('select * from imagenes where actividades_id = ?', [actividadesId]);
}

const insertImages = (actividades_id, imagenes) => {
  return db.query('insert into imagenes (actividad_id, url) values (?, ?)', [actividades_id, `${imagenes}`])
}

module.exports = {
  getByActividadesId,
  insertImages
}
