import { Component, OnInit, Input } from '@angular/core';

import {MovieServiceService} from '../../services/movie-service.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movieDetails:object;


  constructor(private movieService: MovieServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movieDetails = this.movieService.getMovie(this.movieId);
  }
  

}
