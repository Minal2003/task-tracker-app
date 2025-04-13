import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.baseUrl);
  }

  addTask(title: string) {
    return this.http.post(this.baseUrl, { title });
  }

  toggleTask(id: string) {
    return this.http.patch(`${this.baseUrl}/${id}`, {});
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}
