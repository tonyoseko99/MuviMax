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

// create a new movie
exports.createMovie = async (req, res, next) => {
  const { title, description, releaseDate, imageUrl } = req.body;
  try {
    const movie = await Movie.create({
      title,
      description,
      releaseDate,
      imageUrl,
    });
    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

// update a movie by id
exports.updateMovieById = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, releaseDate, imageUrl } = req.body;
  try {
    const [updated] = await Movie.update(
      {
        title,
        description,
        releaseDate,
        imageUrl,
      },
      {
        where: { id },
      }
    );
    if (updated) {
      const updatedMovie = await Movie.findByPk(id);
      res.json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found!" });
    }
  } catch (error) {
    next(error);
  }
};

// delete a movie by id
exports.deleteMovieById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Movie.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).json({ message: "Movie deleted!" });
    } else {
      res.status(404).json({ message: "Movie not found!" });
    }
  } catch (error) {
    next(error);
  }
};
