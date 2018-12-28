import { Component, OnInit } from '@angular/core';

import { Hotel } from '../hotel';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public hotels: Hotel[];

  constructor(
    private hotelsService: HotelsService
  ) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelsService.getHotels()
      .subscribe(response => this.hotels = response);
  }

}
