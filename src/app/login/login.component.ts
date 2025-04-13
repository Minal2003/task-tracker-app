import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  showRegisterModal = false;

  registerData = {
    name: '',
    email: '',
    password: ''
  };
  
  loginForm: any;
  authService: any;
  userEmail: any;


constructor(
  private http: HttpClient,
  private auth: AuthService,
  private router: Router
) {}


  login() {
    const loginPayload = {
      email: this.email,
      password: this.password
    };
  
    console.log('Attempting login with:', loginPayload);
  
    this.http.post('http://localhost:3000/auth/login', loginPayload).subscribe({
      next: (res: any) => {
        console.log('Login successful:', res);
        this.auth.setUser(res.user);  
        alert(res.message);

      // this.router.navigate(['/tasks']);
        this.router.navigate(['/tasks']);
      },

      error: (err: any) => {
        console.error('Login failed:', err);
        alert('Login failed: ' + (err?.error?.message || 'Unknown error'));
      }
    });
  }
  
  
  

  register() {
    this.auth.register(this.registerData).subscribe({
      next: () => {
        alert('Registration successful!');
        this.showRegisterModal = false;
      },
      error: err => alert(err.error.message || 'Registration failed')
    });
  }

  openRegisterModal() {
    this.showRegisterModal = true;
  }

  closeRegisterModal() {
    this.showRegisterModal = false;
  }

  clearRegisterForm(form: any) {
    form.resetForm(); 
    this.registerData = {
      name: '',
      email: '',
      password: ''
    };
  }
  
  ngOnInit() {
    const user = this.authService.getUser();
    console.log('User from AuthService:', user);  
    if (user && user.email) {
      this.userEmail = user.email;
    }
  }
  


  
}
