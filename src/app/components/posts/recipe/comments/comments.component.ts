import { Component, Input } from '@angular/core';
import { Comments } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments: Comments[] = [];
  @Input() refreshComments!: () => void;


  constructor(
    private postService: PostService
  ) { }


  deleteCom(comment: Comments): void {
    this.postService.delete(comment.id as number).subscribe(() => {
      // refresh comments
      this.refreshComments();
    });
  }

}


