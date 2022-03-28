import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  postId: number = this.router.snapshot.params['id'];

  constructor(
    private postService: PostService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPost();

  }
  getPost(): void {
    this.postService.getPost(this.postId).subscribe(res => {

    })
  }
}
