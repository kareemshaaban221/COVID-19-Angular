import { Component } from '@angular/core';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.css']
})
export class PreventionComponent {

  constructor() { }

  up(){
    let off = document.getElementById('howWash');
    off?.scrollIntoView();
  }

}
