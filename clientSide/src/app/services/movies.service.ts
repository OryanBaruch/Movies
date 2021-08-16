import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import extraDetailsInterface from '../interfaces/extraDetails.interface';
import movieInterFace from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    public http: HttpClient,
    public Snackbar: MatSnackBar,
  ) { }

  //InterFaces for moviesArray and the Extra Details object.
  public movies: movieInterFace;
  public extraDetails: extraDetailsInterface = {}

  //Initial the array of movies onload. (ngOnInit.)
  public fetchInitMovies = () => {
    return this.http.get(`http://localhost:5000/movies/initMovies`).subscribe(
      (res: any) => {
        this.movies = res.movies
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  //Fetch data for each movie by its imdbID property (id)
  public fetchMovieById = (id: any) => {
    return this.http.get(`http://localhost:5000/movies/by-id/${id}`).subscribe(
      (res: any) => {
        this.extraDetails = res.data
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  //Fetch array of movies by search.
  public fetchMoviesBySearch = (query: String) => {
    return this.http.get(`http://localhost:5000/movies/search/${query}`).subscribe(
      (res: any) => {
        if (res.data.Error) return alert('no movies were found')
        this.movies = res.data.Search
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
  public showSnackBar = (msg) => {
    this.Snackbar.open(msg, '', {
      duration: 1500,
      verticalPosition: 'top'
    })
  }
}
