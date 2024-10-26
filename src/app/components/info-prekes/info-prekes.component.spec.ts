import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrekesComponent } from './info-prekes.component';

describe('InfoPrekesComponent', () => {
  let component: InfoPrekesComponent;
  let fixture: ComponentFixture<InfoPrekesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPrekesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPrekesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
