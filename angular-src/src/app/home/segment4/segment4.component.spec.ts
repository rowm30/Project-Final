import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment4Component } from './segment4.component';

describe('Segment4Component', () => {
  let component: Segment4Component;
  let fixture: ComponentFixture<Segment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Segment4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
