import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { EstablishmentDataModel } from '../../models/EstablishmentDataModel';
import { QRMenuCodeService } from '../../services/qrmenu-code.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  establishmentData: EstablishmentDataModel;
  constructor(private apiService: QRMenuCodeService) {}

  // loaded lazily
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  // background
  links = ['Item One', 'Item Second', 'Item Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

 ngOnInit() {
    debugger
    const establishmentId = 2; // Replace with your actual establishment ID
    this.apiService.fetchEstablishmentData(establishmentId).subscribe(
      (data: EstablishmentDataModel) => {
        this.establishmentData = data;
        console.log(this.establishmentData);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
