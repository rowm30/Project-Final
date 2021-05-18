import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileS1Component } from './profile-s1.component';

describe('ProfileS1Component', () => {
  let component: ProfileS1Component;
  let fixture: ComponentFixture<ProfileS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
