const mongoose = require("mongoose"); // ODM Object Document Mapper
const Schema = mongoose.Schema;
// the goal of the Schema constuctor is to feed model...
// the Schema is the blueprint : here for each artist that we wanna insert in database
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  { timestamps: true }
);

const MovieModel = mongoose.model("movies", movieSchema);
module.exports = MovieModel;
