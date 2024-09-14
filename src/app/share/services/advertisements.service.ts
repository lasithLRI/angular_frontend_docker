import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor() { }

  createAds(images:any,category:any,sub_category:any,title:any,description:any,province:any,town:any,price:any,price_type:any,contact:any){
    console.log(images,category,sub_category,sub_category,description,title,province,town,price,price_type,contact)
    return of({ success: true });
  }

  getAdvertisementById(adId: string):Observable<any>{

    const mockData = {
      images: [],
      category: 'category Name',
      sub_category: 'Sub category Name',
      title: 'Brand New Phone for Sale',
      description: 'A brand new phone with 1-year warranty.',
      province: 'Province Name',
      town: 'Town Name',
      price: 500,
      price_type: 'Per Unit',
      contact: '123-456-7890'
    }
    return of (mockData);
  }


  updateAdvertisement(adId:any,images:any,category:any,sub_category:any,title:any,description:any,province:any,town:any,price:any,price_type:any,contact:any){
    console.log('Updating Ad:', adId, images, category, sub_category, title, description, province, town, price, price_type, contact);
    return of({ success: true });
  }
}
