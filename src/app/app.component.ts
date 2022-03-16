import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vezba';
  form: FormGroup = this.fb.group({
    minPrice: [''],
    lastPrice: [''],
    procent: [''],
  });
  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit() {
    const minPriceFC = this.form.get('minPrice');
    const lastPriceFC = this.form.get('lastPrice');
    lastPriceFC?.setValue(minPriceFC?.value)

    this.form.get('procent')?.valueChanges.subscribe(value => {
      minPriceFC?.setValue(lastPriceFC?.value * (1 + value / 100))
    })


  }
  onMinPriceChange():void{
    this.form.get('lastPrice')?.setValue(this.form.get('minPrice')?.value)
    this.form.get('procent')?.reset();
  }
}
