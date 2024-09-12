import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'ads',pathMatch:"full"},
  {path:'ads', loadComponent:()=>import('./ads/ads.component').then(c=>c.AdsComponent)},
];
