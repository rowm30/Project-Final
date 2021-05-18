import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileS3Component } from './profile-s3.component';

describe('ProfileS3Component', () => {
  let component: ProfileS3Component;
  let fixture: ComponentFixture<ProfileS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
