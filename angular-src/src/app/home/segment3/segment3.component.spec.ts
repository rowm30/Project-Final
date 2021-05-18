import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment3Component } from './segment3.component';

describe('Segment3Component', () => {
  let component: Segment3Component;
  let fixture: ComponentFixture<Segment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Segment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
