import { Routes } from '@angular/router';
import {CreateAdComponent} from "./create-ad/create-ad.component";

export const routes: Routes = [
  {path:'',redirectTo:'ads',pathMatch:"full"},
  {path:'ads', loadComponent:()=>import('./ads/ads.component').then(c=>c.AdsComponent)},
  {path:'create', loadComponent:()=>import('./create-ad/create-ad.component').then(c=>c.CreateAdComponent)},
  { path: 'update/:id', component: CreateAdComponent },

];
