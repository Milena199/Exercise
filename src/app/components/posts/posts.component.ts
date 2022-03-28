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
  constructor(
    private dialog: MatDialog,
    private postService: PostService,
    private router: ActivatedRoute
  ) { }
  numberOfLikes(): void {
    this.likeCounter++;
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
  getPost(id: number): void {
    this.postService.getPost(id).subscribe(res => {

    })
  }

  dialogResponseCallback(res: any) {
    if (!res) return;
    this.getPosts();
  }

}
