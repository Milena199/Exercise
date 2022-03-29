import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  postId: number = this.route.snapshot.params['id'];
  post!: Post;
  id!: number;


  posts: Post[] = [];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.getPost();
    });
    this.getPosts();
  }
  getPost(): void {
    this.postService.getPost(this.postId).subscribe(res => {
      this.post = res;
    })
  }
  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }
}
