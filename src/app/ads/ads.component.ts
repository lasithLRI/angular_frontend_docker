import { Component } from '@angular/core';
import {HeaderComponent} from "../common/header/header.component";
import {SideAreaComponent} from "../other-components/side-area/side-area.component";
import {AdsContentComponent} from "../other-components/ads-content/ads-content.component";

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [
    HeaderComponent,
    SideAreaComponent,
    AdsContentComponent
  ],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {

}
