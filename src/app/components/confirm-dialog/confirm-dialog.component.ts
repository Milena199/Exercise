import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Comments } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  commentsData: Comments[] = [];
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    comment: [''],
  });

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  onSubmit(): void {
    this.postService.createComment(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

}
