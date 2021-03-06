import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';
import { SliderComponent } from './home/slider/slider.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './home/features/features.component';
import { OurCoursesComponent } from './home/our-courses/our-courses.component';
import { VisionComponent } from './about/vision/vision.component';
import { ChooseComponent } from './about/choose/choose.component';
import { TeamComponent } from './about/team/team.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LatestCourseListComponent } from './course/latest-course-list/latest-course-list.component';
import { ContactComponent } from './contact/contact.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SubscribeComponent,
    SliderComponent,
    AboutComponent,
    FeaturesComponent,
    OurCoursesComponent,
    VisionComponent,
    ChooseComponent,
    TeamComponent,
    CourseComponent,
    CourseListComponent,
    LatestCourseListComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
