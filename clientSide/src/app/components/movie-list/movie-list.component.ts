import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    public MovieService:MoviesService,
    public dialog:MatDialog
  ) { }

  //Init all movies..
  ngOnInit(): void {
    this.MovieService.fetchInitMovies()
  }

}
