import { Component, Input, OnInit } from '@angular/core';
import { Geo } from 'src/app/shared/interfaces/user/address/geo';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {

  @Input() geo: Geo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
