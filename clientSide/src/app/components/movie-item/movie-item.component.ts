import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {


  constructor(
    public MovieService: MoviesService,
    public dialog: MatDialog,
  ) { }


  @Input() movie = this.MovieService.movies
  ngOnInit(): void {
  }
  
  //Open the dialog (Material) and shows the props of each movie.
  public fetchMovieDataById = (id: any) => {
  this.dialog.open(MovieModalComponent);
  this.MovieService.fetchMovieById(id)
}

}
