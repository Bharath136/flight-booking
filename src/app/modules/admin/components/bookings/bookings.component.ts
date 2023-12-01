import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  isLoading = false
  bookings: any[] = []
  constructor(private http:HttpClient){
    this.isLoading = true
    this.http.get<any[]>('https://angular-crud-7ld3.onrender.com/bookings').subscribe((res) => {
      this.bookings = res
      this.isLoading = false
    })
  }
}
