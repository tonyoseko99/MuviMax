const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

// get all movies
router.get("/", movieController.getAllMovies);

// get a specific movie by id
router.get("/:id", movieController.getMovieById);

// create a new movie
router.post("/", movieController.createMovie);

// update an existing movie by id
router.put("/:id", movieController.updateMovieById);

// Delete a movie by id
router.delete("/:id", movieController.deleteMovieById);

module.exports = router;
