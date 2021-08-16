import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent implements OnInit {

  constructor(
    public MovieService:MoviesService
  ) { }

  ngOnInit(): void {
  }

}
