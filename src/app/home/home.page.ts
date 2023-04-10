import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [TranslocoModule, IonicModule, ReactiveFormsModule],
})
export class HomePage {
  protected readonly form = new FormGroup({
    options: new FormControl('1'),
    input1: new FormControl('Value'),
    input2: new FormControl(null),
    input3: new FormControl(null),
  });
}
