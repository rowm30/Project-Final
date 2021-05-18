import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileS5Component } from './profile-s5.component';

describe('ProfileS5Component', () => {
  let component: ProfileS5Component;
  let fixture: ComponentFixture<ProfileS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
