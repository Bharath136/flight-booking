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
    const airline = localStorage.getItem('airline')
    this.http.get<any[]>('https://main.d2t61297rqeiah.amplifyapp.com/bookings').subscribe((res) => {
      this.bookings = res.filter(booking => booking.flight.airline === airline)
      this.isLoading = false
    })
  }
}
