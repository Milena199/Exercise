import { Component, OnInit } from '@angular/core';
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
  comments: Comments[] = []
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
    postId: [this.postId],
    name: ['', Validators.required],
    email: ['', Validators.email],
    comment: ['']
  })
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute
  ) { }


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



  ngOnInit(): void {
    console.log(this.allFavourites, this.currentFavIndex);

    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.getPost();
    });
    this.getPosts();
    this.getComments();
  }
  getComments(): void {
    this.postService.getComments(this.postId).subscribe(res => {
      this.comments = res;
    })
  }
  onSubmit(): void {
    this.postService.createComment(this.form.value).subscribe(res => {
      this.getComments();
      this.form?.reset();
    })
  }
  getPost(): void {
    this.postService.getPost(this.postId).subscribe(res => {
      this.postData = res;
      this.currentFavIndex = this.allFavourites.findIndex(el => el.id === this.postData.id);
    })
  }
  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }
}
