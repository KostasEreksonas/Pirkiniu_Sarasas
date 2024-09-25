import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaizduotiPrekesComponent } from './vaizduoti-prekes.component';

describe('VaizduotiPrekesComponent', () => {
  let component: VaizduotiPrekesComponent;
  let fixture: ComponentFixture<VaizduotiPrekesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaizduotiPrekesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaizduotiPrekesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
