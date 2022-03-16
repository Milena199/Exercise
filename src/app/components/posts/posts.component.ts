import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['title', 'body'];
  color = '';
  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private postService: PostService
  ) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
      this.dataSource = this.posts;
    })
  }


  showDialog(): void {
    this.dialog.open(ConfirmDialogComponent,
      {})
      .afterClosed()
      .subscribe(this.dialogResponseCallback)
  }


  dialogResponseCallback(res: any) {
    if (!res) return;
    // console.log(res);
  }

}
