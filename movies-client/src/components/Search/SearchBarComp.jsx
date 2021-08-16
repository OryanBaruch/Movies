import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import "./search.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBarComp = ({ searchValue, setSearchValue, setMovies }) => {
  const classes = useStyles();

  const handleSearchMovies = async (e) => {
    if (searchValue) {
      e.preventDefault();
      const res = await fetch(
        `http://localhost:5000/movies/search/${searchValue}`
      );
      const data = await res.json();
      if (data?.data?.Error) return alert(data?.data?.Error) + setSearchValue("");
      setMovies(data?.data?.Search);
      setSearchValue("");
    } else {
      alert("Must enter a value");
    }
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div id="searchContainer">
      <Paper
        onSubmit={handleSearchMovies}
        component="form"
        className={classes.root}
      >
        <InputBase
          value={searchValue}
          onChange={handleOnChange}
          className={classes.input}
          placeholder="Search Movies..."
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBarComp;
