import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];
  id!: number;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postService.getComments().subscribe(res => {
      this.comments = res;
    })
  }

  deleteCom(id:number): void {
    this.postService.delete(id).subscribe(res => {
      this.comments = this.comments.filter(item => item.id !== id)

    })
  }
}
