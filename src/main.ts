import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { TaskComponent } from './app/task/task.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
