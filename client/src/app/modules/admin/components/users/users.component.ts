import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = []
  isLoading = true

  constructor(private http:HttpClient){
    this.http.get<any[]>('https://angular-crud-7ld3.onrender.com/users').subscribe((res) => {
      this.users = res
      this.isLoading = false
    })
  }
}
