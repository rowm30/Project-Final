import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnojamComponent } from './technojam.component';

describe('TechnojamComponent', () => {
  let component: TechnojamComponent;
  let fixture: ComponentFixture<TechnojamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnojamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnojamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
