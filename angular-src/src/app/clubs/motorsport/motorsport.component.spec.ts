import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorsportComponent } from './motorsport.component';

describe('MotorsportComponent', () => {
  let component: MotorsportComponent;
  let fixture: ComponentFixture<MotorsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
