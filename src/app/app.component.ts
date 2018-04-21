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
    url: new FormControl(),
    text: new FormControl()
  });

  getDataForQR() : string {
    if (this.formData.get('mode').value === 'url') return this.formData.get('url').value;
    else if (this.formData.get('mode').value === 'text') return this.formData.get('text').value;
    else return '';
  }
}
