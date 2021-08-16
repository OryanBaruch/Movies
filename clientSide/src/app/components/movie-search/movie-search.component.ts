import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(
    public MovieService: MoviesService
  ) { }

  ngOnInit(): void {
  }


  public output: String = ''

  //Based on the output value, an array of movies will display after submit
  //Used sumbit sence i dont want to call the server for every change of key in the input field.
  
  public handleSearch = () => {
    if(this.output=='') return this.MovieService.showSnackBar('Must enter a movie to search...')
    this.MovieService.fetchMoviesBySearch(this.output)
    this.output = ''
  }

}
