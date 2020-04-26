import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { MachineLearningComponent } from './course/courses/machine-learning/machine-learning.component';
import { Blog1Component } from './course/courses/machine-learning/blogs/blog1/blog1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'machine-learning', component: MachineLearningComponent
  },
  {
    path: 'blog1', component: Blog1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
