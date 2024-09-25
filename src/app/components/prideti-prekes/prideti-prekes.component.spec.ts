import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiPrekesComponent } from './prideti-prekes.component';

describe('PridetiPrekesComponent', () => {
  let component: PridetiPrekesComponent;
  let fixture: ComponentFixture<PridetiPrekesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PridetiPrekesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PridetiPrekesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
