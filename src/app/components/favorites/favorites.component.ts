import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  
  
  allFavourites: Post[] = JSON.parse(localStorage.getItem('favourites') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

}
