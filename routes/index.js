const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res, next) => {
    try {
      const movies = await MovieModel.find();
      res.render("movies.hbs", {
        movies,
      });
    } catch (dbErr) {
      next(dbErr);
    }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movieDetails", movie);
  } catch (dbErr) {
    next(dbErr);
  }
});

module.exports = router;
