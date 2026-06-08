//module.exports = (req, res, next) => {
  //const apiKey = req.headers['x-api-key'];

  //if (apiKey !== '12345') {
    //return res.status(401).json({ mensaje: 'API Key inválida' });
  //}

  //next();
//};


const apiKey = req.headers['x-api-key'];

if (apiKey !== process.env.API_KEY) {
  return res.status(401).json({ mensaje: 'API Key inválida' });
}
``
