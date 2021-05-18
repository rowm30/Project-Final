import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Segment1Component } from './home/segment1/segment1.component';
import { Segment2Component } from './home/segment2/segment2.component';
import { Segment3Component } from './home/segment3/segment3.component';
import { Segment4Component } from './home/segment4/segment4.component';
import { Segment5Component } from './home/segment5/segment5.component';
import { Segment6Component } from './home/segment6/segment6.component';
import { NavBarComponent } from './home/segment1/nav-bar/nav-bar.component';
import { AboutButtonComponent } from './home/segment3/about-button/about-button.component';
import { LoginComponent } from './home/login/login.component';
import { BannerShadowDirective } from './home/segment2/banner-shadow.directive';
import { LoginbuttonDirective } from './home/shared/loginbutton.directive';
import { NewLoginComponent } from './home/segment1/nav-bar/new-login/new-login.component';
import { NewloginDirective } from './home/segment1/nav-bar/newlogin.directive';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/user.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileS1Component } from './profile/profile-s1/profile-s1.component';
import { ProfileS2Component } from './profile/profile-s2/profile-s2.component';
import { ProfileS3Component } from './profile/profile-s3/profile-s3.component';
import { ProfileS4Component } from './profile/profile-s4/profile-s4.component';
import { ProfileS5Component } from './profile/profile-s5/profile-s5.component';
import { UserNavComponent } from './profile/profile-s1/user-nav/user-nav.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ClubsComponent } from './clubs/clubs.component';
import { CulturalComponent } from './clubs/cultural/cultural.component';
import { LiteraryComponent } from './clubs/literary/literary.component';
import { ManagementComponent } from './clubs/management/management.component';
import { MotorsportComponent } from './clubs/motorsport/motorsport.component';
import { SocialComponent } from './clubs/social/social.component';
import { TechnicalComponent } from './clubs/technical/technical.component';
import { TechnojamComponent } from './clubs/technojam/technojam.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'clubs', component: ClubsComponent, canActivate:[AuthGuard]},
  {path: 'clubs/cultural', component: CulturalComponent, canActivate:[AuthGuard]},
  {path: 'clubs/technojam', component: TechnojamComponent, canActivate:[AuthGuard]},
  {path: 'admin007', component: AdminPanelComponent, canActivate:[AuthGuard]}
  // , canActivate:[AuthGuard] put this in club path
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Segment1Component,
    Segment2Component,
    Segment3Component,
    Segment4Component,
    Segment5Component,
    Segment6Component,
    NavBarComponent,
    AboutButtonComponent,
    LoginComponent,
    BannerShadowDirective,
    LoginbuttonDirective,
    NewLoginComponent,
    NewloginDirective,
    SignupComponent,
    ProfileComponent,
    ProfileS1Component,
    ProfileS2Component,
    ProfileS3Component,
    ProfileS4Component,
    ProfileS5Component,
    UserNavComponent,
    ClubsComponent,
    CulturalComponent,
    LiteraryComponent,
    ManagementComponent,
    MotorsportComponent,
    SocialComponent,
    TechnicalComponent,
    TechnojamComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
