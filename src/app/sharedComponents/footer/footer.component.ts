import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open(site: string){
    window.open(`https://www.${site}.com`);
  }

  up(){
    scrollTo(0, 0);
  }

}
