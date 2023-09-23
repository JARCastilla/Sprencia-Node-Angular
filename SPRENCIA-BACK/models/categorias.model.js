const getAll = () => {
  return db.query('select * from categorias');
};

module.exports = {
  getAll
};