import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  likeCounter = 0;
  // key: string = 'Name';
  data!: any;
  constructor(
    private dialog: MatDialog,
    private postService: PostService,
  ) {

  }

  numberOfLikes(post: Post): void {
    if (!post.likeCounter) {
      post.likeCounter = 0;
    }
    post.likeCounter++;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

  showDialog(): void {
    this.dialog.open(ConfirmDialogComponent,
      {})
      .afterClosed()
      .subscribe(this.dialogResponseCallback.bind(this))
  }
  dialogResponseCallback(res: any) {
    if (!res) return;
    this.getPosts();
  }

}
