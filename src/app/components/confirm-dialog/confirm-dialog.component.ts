import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comments} from 'src/app/models/models';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  commentsData: Comments[] = [];
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    comment: ['']
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  onSubmit(): void {
      this.commentsData.push(this.form.value);
  }

  ngOnInit(): void {
    console.log(this.commentsData);
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // onOKClick():void{
  //   this.dialogRef.close(true)
  // }
}
