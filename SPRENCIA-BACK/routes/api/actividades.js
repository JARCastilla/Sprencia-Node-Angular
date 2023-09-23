const router = require('express').Router();

// Requerimos fileSystem para poder trabajar con carpetas y archivos
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' })

const { create, getAll, getById, getByPage, count, getIdByCategoryName, getIdByCityName } = require('../../models/actividades.model');

const { checkToken, checkAdmin } = require('../../helpers/middlewares');



// Todas las actividades paginadas y con límite
router.get('/', async (req, res) => {

  // const { limit = 20, page = 1 } = req.query;
   try {
    const [response] = await getAll()
  //   const [actividades] = await getByPage(page, limit);

    
  //   for (let actividad of actividades) {

  //     const images = await getByActividadesId(actividad.id);
  //     const urls = [];
  //     for (let image of images[0]) {
  //       const url = image.url;
  //       urls.push(url);
  //     }
  //     actividades.images = urls;
  //   }

  
  //   const [num] = await count();
  //   console.log(num)

  //   const total = num[0].count;

    res.json( 
      response

      // info: {
      //   current_page: parseInt(page),
      //   count: total,
      //   pages: Math.ceil(total / limit)
      // },
      // results: actividades
   );

  } catch (err) {
    res.json(err.message)
  }
});




router.get('/:actividadesId', async (req, res) => {
  const { actividadesId } = req.params;
  try {

    const [result] = await getById(actividadesId)

    // if (result.length === 0) {
    //   return res.json({ error: 'No existe la actividad con ese Id' });
    // }

    // const images = await getByActividadesId(actividadesId);
    // const urls = [];
    // for (let image of images[0]) {
    //   console.log(image.url)
    //   const url = image.url;
    //   urls.push(url);
    // }

    // result[0].images = urls;


    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});


// **** POST ****

// Creamos nuevas actividades
router.post('/',
  checkToken,
  checkAdmin,
  // upload.array('images'),
  async (req, res) => {

    // // Extraemos el id de categoría y ciudad para su inserción en la BD
    // const getCategoriaId = await getIdByCategoryName(req.body.categorias)
    // req.body.categorias_id = getCategoriaId[0][0].id;

    // const getCiudadId = await getIdByCityName(req.body.ciudades)
    // req.body.ciudades_id = getCiudadId[0][0].id;

    try {

      // let images = [];
      // req.files.forEach((image) => {
      //   // Extraemos la extensión de la imagen
      //   const extension = image.mimetype.split('/')[1];
      //   // Agregamos la extensión al nombre de la imagen y ruta
      //   const newName = `${image.filename}.${extension}`;
      //   const newPath = `${image.path}.${extension}`;
      //   // Renombramos la antigua ruta
      //   fs.renameSync(image.path, newPath);
      //   // Añadimos las imágenes al array
      //   images.push(newName);
      // });

      // // Agregamos cada imagen al array "urls" y creamos la variable images en req.body que se llenará con los datos en el array urls
      // const urls = [];
      // for (let image of images) {
      //   urls.push(image)
      // }
      // req.body.images = urls
      console.log(req.body);
      // Creamos la actividad y recogemos el insertId el cual extraemos en una variable en req.body
      const response = await create(req.body);
      

      // Recorremos el array de imágenes y las vamos insertando en la tabla con su id de actividad correspondiente
      // let result;
      // for (let image of req.body.images) {
      //   result = await insertImages(req.body.actividades_id, image)

      // }
      res.json({ success: 'Actividad creada correctamente' });
    } catch (err) {
      res.json({ error: err.message });
    }
  });

module.exports = router;