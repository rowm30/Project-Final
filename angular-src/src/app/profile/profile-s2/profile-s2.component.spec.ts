import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileS2Component } from './profile-s2.component';

describe('ProfileS2Component', () => {
  let component: ProfileS2Component;
  let fixture: ComponentFixture<ProfileS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
