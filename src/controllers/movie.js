const { Movie } = require("../models");

// get all movies
exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

// get movie by id
exports.getMovieById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found!" });
    }
  } catch (error) {
    next(error);
  }
};
