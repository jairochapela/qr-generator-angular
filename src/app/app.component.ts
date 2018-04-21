import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My QR Generator';
  mode = 'url';
  formData = new FormGroup({
    mode: new FormControl(),
    url: new FormControl()
  });
}
