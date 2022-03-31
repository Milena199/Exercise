import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments, Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  allFavourites: Post[] = JSON.parse(localStorage.getItem('favourites') || '[]');

  comments: Comments[] = [];
  id!: number;
  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
 
  }

  deleteCom(id: number): void {
    this.postService.delete(id).subscribe(res => {
      this.comments = this.comments.filter(item => item.id !== id)

    })
  }
}
