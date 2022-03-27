import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private dialog: MatDialog,
    private postService: PostService
  ) { }


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    },
      err => { },
      () => {
        // console.log("completed");

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
    // console.log(res);
    this.getPosts();
  }

}
