const getAll = () => {
  return db.query('select * from ciudades');
};

module.exports = {
  getAll
};