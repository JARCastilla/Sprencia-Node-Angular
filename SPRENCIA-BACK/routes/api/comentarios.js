const router = require('express').Router();

const { getGeneralSprencia, getByActividadesId } = require('../../models/comentarios.model');


router.get('/:actividadId', async (req, res) => {
    const { actividadesId } = req.params;
    try {
        const [result] = await getGeneralSprencia(actividadesId);

        if (result === null) {

            return res.json({ fatal: 'No es una opinion general' })
        }
        res.json(result[0]);

    } catch (err) {
        res.json(err.message);
    }
});




router.get('/actividades/:comentariosId', async (req, res) => {
    const { comentariosId } = req.params;

    try {
        const [result] = await getByActividadesId(comentariosId);
        console.log(result)
        if (result.length === 0) {
            return res.json({ fatal: 'No hay comentarios con ese ID' });
        }
        res.json(result);

    } catch (err) {
        res.json(err.message);
    }
});






module.exports = router;