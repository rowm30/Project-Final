import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileS4Component } from './profile-s4.component';

describe('ProfileS4Component', () => {
  let component: ProfileS4Component;
  let fixture: ComponentFixture<ProfileS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
