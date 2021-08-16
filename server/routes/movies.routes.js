const router = require("express").Router();
const fetch = require("node-fetch");

//Initial an array of 10 movies.
router.get("/initMovies", async (req, res) => {
  try {
    const url_api = "http://www.omdbapi.com/?s=movie&apikey=4aee424c";
    const fetchResponse = await fetch(url_api);
    const data = await fetchResponse.json();
    return res.json({
      error: false,
      msg: "Movies has been fetched",
      movies: data.Search,
    });
  } catch (error) {
    console.log(error);
  }
});

//Fetch movie by ID (imdbID)
router.get(`/by-id/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const url_api = `http://www.omdbapi.com/?i=${id}&apikey=4aee424c`;
    const fetchResponse = await fetch(url_api);
    const data = await fetchResponse.json();
    return res.json({
      error: false,
      msg: "Id by demand has fetched.",
      data: {
        Title: data.title,
        Year: data.Year,
        Rate: data.Rated,
        Released: data.Released,
        Runtime: data.Runtime,
        Director: data.Director,
        Actors: data.Actors,
        Language: data.Language,
        Awards: data.Awards,
        Poster: data.Poster,
        MovieBarCode: data.imdbID,
        Production: data.Production,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Return an array of 10 movies based on your Query.
router.get("/search/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const api_url = `http://www.omdbapi.com/?s=${query}&apikey=4aee424c`;
    const fetchResponse = await fetch(api_url);
    const data = await fetchResponse.json();
    if (!data) {
      return res.json({
        err: true,
        msg: "No movies were found.",
      });
    }
    res.json({
      error: false,
      msg: "Filtered Movies for you.",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
