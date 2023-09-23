const { getAll } = require('../../models/categorias.model');

const router = require('express').Router()

// **** GET ****

// Conseguimos todas las categorías
router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    console.log(result);
    res.json(result);

  } catch (err) {
    res.json({ error: err.message });
  }
})



module.exports = router;