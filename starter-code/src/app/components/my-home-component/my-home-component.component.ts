import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../../services/movie-service.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieArray:Array <Object>;

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.movieArray = this.movieService.getMovies();
  }



}
