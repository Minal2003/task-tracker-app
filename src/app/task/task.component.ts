import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass], 
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  newTask = '';
  tasks: any[] = [];
  authService: any;
  userEmail: string = '';
  showHealthyTips: boolean | undefined;

  constructor(private taskService: TaskService, private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.loadTasks();
    const user = this.authService.getUser();
    console.log(user);  

    if (user && this.userEmail) {
      this.userEmail =  user.email;  
    }
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask).subscribe(() => {
        this.newTask = '';
        this.loadTasks(); 
      });
    }
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id).subscribe(() => {
      this.loadTasks(); 
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks(); 
    });
  }

showLogout=false;
  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  logout() {

    alert('Logging out...');
    this.showLogout = false;
    this.router.navigate(['/login']);
  }



  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  noteContent = '';
showNotePopup = false;

openNotePopup() {
  this.noteContent = '';
  this.showNotePopup = true;
}

closeNotePopup() {
  this.showNotePopup = false;
}

showTipsPopup() {
  this.showHealthyTips = true;
  this.showNotePopup = true; 
}

  

}
