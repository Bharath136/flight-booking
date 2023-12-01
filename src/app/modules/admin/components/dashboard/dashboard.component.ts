import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  flights: any[] = []
  bookings: any[] = []
  users: any[] = []
  isLoading = false
  constructor(private http:HttpClient){
    this.isLoading = true
    this.http.get<any[]>('https://angular-crud-7ld3.onrender.com/flights').subscribe((res) => {
      this.flights = res
    })

    this.http.get<any[]>('https://angular-crud-7ld3.onrender.com/bookings').subscribe((res) => {
      this.bookings = res
    })

    this.http.get<any[]>('https://angular-crud-7ld3.onrender.com/users').subscribe((res) => {
      this.users = res
      this.isLoading = false
    })
  }
}
