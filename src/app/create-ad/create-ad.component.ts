import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../common/header/header.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {AdvertisementsService} from "../share/services/advertisements.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css',
})
export class CreateAdComponent implements OnInit{

  constructor(private advertisement_service:AdvertisementsService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
        if (id){
          this.adId = this.route.snapshot.paramMap.get('id');

          if(this.adId){
            this.loadAdvertisement(this.adId)
          }
        }
    }

  selectedImages:File[] = [];
  selectedImageUrls: string[] = [];
  adId: string | null ='';


  createAd = new FormGroup({
    images: new FormControl<File[]>([],Validators.required),
    category: new FormControl('',Validators.required),
    sub_category: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    province: new FormControl('',Validators.required),
    town: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    price_type: new FormControl('',Validators.required),
    contact: new FormControl('',Validators.required),
  });

  onImageSelected(event: any){
    const files:FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedImages.push(file);
      this.selectedImageUrls.push(URL.createObjectURL(file));

    }
    this.createAd.get('images')?.setValue(this.selectedImages)
  }

  onRemoveImage(file:File,event:Event){

    const index = this.selectedImages.indexOf(file);
    if (index>-1){
      this.selectedImages.splice(index,1);
      this.selectedImageUrls.splice(index, 1);
      this.createAd.get('images')?.setValue(this.selectedImages);
      event.preventDefault()
    }
  }

  getImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  loadAdvertisement(adId:string){
    this.advertisement_service.getAdvertisementById(adId).subscribe((adData:any)=>{
      this.createAd.patchValue({
        images: adData.images,
        category: adData.category,
        sub_category: adData.sub_category,
        title: adData.title,
        description: adData.description,
        province: adData.province,
        town: adData.town,
        price: adData.price,
        price_type: adData.price_type,
        contact: adData.contact
      });
      this.selectedImages = adData.images || [];
    });
  }

  createAdvertisement() {

    if (this.adId){
      this.advertisement_service.updateAdvertisement(
        this.adId,
        this.createAd.get('images')?.value,
        this.createAd.get('category')?.value,
        this.createAd.get('sub_category')?.value,
        this.createAd.get('title')?.value,
        this.createAd.get('description')?.value,
        this.createAd.get('province')?.value,
        this.createAd.get('town')?.value,
        this.createAd.get('price')?.value,
        this.createAd.get('price_type')?.value,
        this.createAd.get('contact')?.value,
      ).subscribe(()=>{
        this.router.navigateByUrl('/ads');
      })
    }else{
      this.advertisement_service.createAds(
        this.createAd.get('images')?.value,
        this.createAd.get('category')?.value,
        this.createAd.get('sub_category')?.value,
        this.createAd.get('title')?.value,
        this.createAd.get('description')?.value,
        this.createAd.get('province')?.value,
        this.createAd.get('town')?.value,
        this.createAd.get('price')?.value,
        this.createAd.get('price_type')?.value,
        this.createAd.get('contact')?.value,
      ).subscribe(()=>{
        this.router.navigateByUrl('/ads');
      })

    }
  }


  onReset() {
    this.selectedImages = [];
    this.selectedImageUrls=[];
    this.createAd.get('images')?.setValue(this.selectedImages);
  }
}
