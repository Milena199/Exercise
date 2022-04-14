import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
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
    private postService: PostService,
    private dialog: MatDialog
  ) { }


  deleteCom(comment: Comments): void {
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe((result: boolean) => {
      if (!result) { return; }
      this.postService.delete(comment.id as number).subscribe(() => {
        // refresh comments
        this.refreshComments();
      });
    })
  }

}


