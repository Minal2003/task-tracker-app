import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'app-task',
        component:TaskComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
