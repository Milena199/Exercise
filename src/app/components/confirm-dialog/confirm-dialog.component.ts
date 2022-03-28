import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comments } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  commentsData: Comments[] = [];
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    comment: [''],

    // comment: ['']
  });

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  onSubmit(): void {
    this.postService.createComment(this.form.value).subscribe(res=>{
      console.log(res);
      this.dialogRef.close(true);
      
    })
  }

  ngOnInit(): void {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // onOKClick():void{
  //   this.dialogRef.close(true)
  // }
}
