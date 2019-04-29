import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WeaterService } from '../../services/weater.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city: any;

  constructor( private weatherService: WeaterService, public route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      this.weatherService.getInfo(params.name, params.country).subscribe(
        data => {
          this.city = data;
        })
    }); 
  }

  ngOnInit() {
  }

}
