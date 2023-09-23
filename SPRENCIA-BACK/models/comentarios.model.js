const getByActividadesId = (actividadesId) => {
  return db.query('select o.texto, u.nombre, o.actividades_id from sprencia.comentarios as o inner join usuarios as u on o.usuarios_id = u.id where o.actividades_id = ?', [actividadesId])
}





const getGeneralSprencia = () => {
  return db.query('select * from sprencia.comentarios where actividades_id is null ')
}



module.exports = { getGeneralSprencia, getByActividadesId };