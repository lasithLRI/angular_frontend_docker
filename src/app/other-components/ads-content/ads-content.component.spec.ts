import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsContentComponent } from './ads-content.component';

describe('AdsContentComponent', () => {
  let component: AdsContentComponent;
  let fixture: ComponentFixture<AdsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
