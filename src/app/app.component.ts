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
    mode: new FormControl({value: 'url'}),
    url: new FormControl({value:'', disabled:false}),
    text: new FormControl({value:'', disabled:false})
  });

  onChangeMode() {
    console.log("clunk " + this.currentMode())
    let mode = this.currentMode();
    // if (mode==='url') this.formData.get('url').enable(); else this.formData.get('url').disable();
    // if (mode==='text') this.formData.get('text').enable(); else this.formData.get('text').disable();
  }

  currentMode() : string {
    return this.formData.get('mode').value;
  }

  getDataForQR() : string {
    if (this.formData.get('mode').value === 'url') return this.formData.get('url').value;
    else if (this.formData.get('mode').value === 'text') return this.formData.get('text').value;
    else return '';
  }
}
