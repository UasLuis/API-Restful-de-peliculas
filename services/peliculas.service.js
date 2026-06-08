const Pelicula = require('../models/pelicula');

exports.getAll = async () => {
  return await Pelicula.findAll();
};

exports.getById = async (id) => {
  return await Pelicula.findByPk(id);
};

exports.create = async (data) => {
  return await Pelicula.create(data);
};

exports.update = async (id, data) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  return await pelicula.update(data);
};

exports.delete = async (id) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return true;
};