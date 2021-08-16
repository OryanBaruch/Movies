import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "./dialog.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ButtonComp = ({ movie, classes }) => {
  //states for modal and dataOfMovie object.
  const [open, setOpen] = React.useState(false);
  const [movieItemData, setMovieItemData] = useState({});

  //Fetch Data for each movie by Its ID
  const fetchDataById = async (id) => {
    const res = await fetch(`http://localhost:5000/movies/by-id/${id}`);
    const data = await res.json();
    console.log(data.data);
    setMovieItemData(data.data);
  };

  const handleClickOpen = () => {
    setOpen(true);
    fetchDataById(movie.imdbID);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        More info
      </Button>
      <Dialog
        className="dialogContainer"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">{movie.Title}</DialogTitle>
        <DialogContent className="dialogContent">
          <div className="contextRight">
            <h4>
              <strong>Actors:</strong> {movieItemData.Actors}
            </h4>
            <h4>
              <strong>Awards:</strong> {movieItemData.Awards}
            </h4>
            <h4>
              <strong>Director:</strong> {movieItemData.Director}
            </h4>
            <h4>
              <strong>Language:</strong> {movieItemData.Language}
            </h4>
            <h4>
              <strong>MovieBarCode:</strong> {movieItemData.MovieBarCode}{" "}
            </h4>
            <h4>
              <strong>Rate:</strong> {movieItemData.Rate}
            </h4>
            <h4>
              <strong>Released:</strong> {movieItemData.Released}
            </h4>
            <h4>
              <strong>Year:</strong> {movieItemData.Year}
            </h4>
              </div>
              <img
                className="img"
                src={movieItemData.Poster}
                alt="imagePoster"
              />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ButtonComp;
