import { Component, OnInit } from '@angular/core';
import { WeaterService } from '../../services/weater.service';

let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: any[] = [];
  info: any[] = [];

  constructor( public weaterService: WeaterService ) {
    this.weaterService.getCity().subscribe( data => {
      this.cities = data;
    });
   }

  ngOnInit() {
  }


}
