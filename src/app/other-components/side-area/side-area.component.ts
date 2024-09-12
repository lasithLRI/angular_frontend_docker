import { Component } from '@angular/core';
import {CategoriesComponent} from "../categories/categories.component";
import {LocationsComponent} from "../locations/locations.component";

@Component({
  selector: 'app-side-area',
  standalone: true,
  imports: [
    CategoriesComponent,
    LocationsComponent
  ],
  templateUrl: './side-area.component.html',
  styleUrl: './side-area.component.css'
})
export class SideAreaComponent {

}
