import { Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import SearchBarComp from "./components/Search/SearchBarComp";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "95%",
    width: "95%",
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: "#FDB927",
    background: " #552583",
  },
}));

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  //fetch all movies
  const fetchMovies = async () => {
    const res = await fetch(`http://localhost:5000/movies/initMovies`);
    const data = await res.json();
    setMovies(data.movies);
  };

  //fetch the movies while page loads.
  useEffect((id) => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Netflix Clone
      </header>
      <SearchBarComp
      movies={movies}
      setMovies={setMovies}
      searchValue={searchValue}
      setSearchValue={setSearchValue} />
      <Grid spacing={3} className="grid" container justifyContent="center">
        {movies &&
          movies.map((movie, index) => (
            <Grid key={index} item xl={2} lg={3} md={4} sm={6} xs={12}>
              <Paper className={classes.paper}>
                <MovieList key={index} movie={movie} />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default App;
