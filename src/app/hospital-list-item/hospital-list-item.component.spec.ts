import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalListItemComponent } from './hospital-list-item.component';

describe('HospitalListItemComponent', () => {
  let component: HospitalListItemComponent;
  let fixture: ComponentFixture<HospitalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
