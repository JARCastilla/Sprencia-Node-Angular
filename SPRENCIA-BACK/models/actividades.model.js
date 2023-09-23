//Realizamos las query

//Función que recibe todas los actividades
const getAll = () => {
	return db.query('select a.*, ca.nombre, c.nombre from sprencia.actividades as a inner join ciudades as c on c.id = a.ciudad_id inner join categorias as ca on ca.id = a.categoria_id order by precio asc');
}

//Función que recibe una sola actividad por su ID
const getById = (actividadesId) => {
	return db.query('select a.*, ca.nombre, c.nombre from sprencia.actividades as a inner join ciudades as c on c.id = a.ciudad_id inner join categorias as ca on ca.id = a.categoria_id where a.id = ?',
		[actividadesId]);
}

// Query para conseguir el límite de 20 actividades en home
const getByPage = (page, limit) => {

	page = parseInt(page);
	limit = parseInt(limit);
	return db.query('select * from actividades order by likes desc limit ? offset ?',
		[limit, (page - 1) * limit])
}


const getIdByCategoryName = (categorias) => {
	return db.query('select ca.id from categorias as ca where ca.categorias = ?',
		[categorias]);
}

const getIdByCityName = (ciudades) => {
	return db.query('select ci.id from ciudades as ci where ci.ciudades = ?',
		[ciudades]);
}

//Función que crea una nueva actividad con todos los campos necesarios
const create = ({ titulo, descripcion, resumen, precio, categoria_id, ciudad_id }) => {
	return db.query(
		'insert into actividades (titulo, descripcion, resumen, precio, categoria_id, ciudad_id) values (?, ?, ?, ?, ?, ?)',
		[titulo, descripcion, resumen, precio, categoria_id, ciudad_id]
	);
}

const count = () => {
	return db.query('select count(*) as count from actividades');
}

module.exports = {
	getAll,
	getById,
	getByPage,
	getIdByCategoryName,
	getIdByCityName,
	create,
	count
};