import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments, Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  comments: Comments[] = [];
  postId: number = this.route.snapshot.params['id'];
  posts: Post[] = [];

  postData: Post = {
    id: this.postId,
    title: '',
    body: '',
    imgSrc: '',
    likeCounter: 0
  };

  allFavourites: Post[] = JSON.parse(localStorage.getItem('favourites') || '[]');
  currentFavIndex = this.allFavourites.findIndex(el => el.id == this.postData.id);

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    comment: [''],
  })


  constructor(
    private fb: FormBuilder,
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

  favourites(): void {
    this.allFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    this.currentFavIndex = this.allFavourites.findIndex(el => el.id == this.postData.id);

    if (this.allFavourites.length === 0 || this.currentFavIndex == -1) {
      this.allFavourites.push(this.postData)
    }
    else {
      this.allFavourites.splice(this.currentFavIndex, 1);
    }

    localStorage.setItem('favourites', JSON.stringify(this.allFavourites))
    this.currentFavIndex = this.allFavourites.findIndex(el => el.id == this.postData.id);
  }


  createCom(): void {
    this.postService.createComment({ postId: this.postId, ...this.form.value }).subscribe(res => {
      this.getComments();
      this.form.reset();
    })
  }


  getComments = (): void => {
    this.postService.getComments(this.postId).subscribe(res => {
      this.comments = res;
    })
  }


  getPost(): void {
    this.postService.getPost(this.postId).subscribe(res => {
      this.postData = res;
      this.getComments();
      this.currentFavIndex = this.allFavourites.findIndex(el => el.id === this.postData.id);
    })
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }
}
