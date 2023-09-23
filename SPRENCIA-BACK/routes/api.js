const { checkToken } = require('../helpers/middlewares');
const { checkRole } = require('../helpers/middlewares');
const router = require('express').Router();

router.use('/actividades', require('./api/actividades'));
router.use('/usuarios', require('./api/usuarios'));
router.use('/categorias', require('./api/categorias'));
router.use('/ciudades', require('./api/ciudades.js'));
router.use('/comentarios', require('./api/comentarios'));

module.exports = router;