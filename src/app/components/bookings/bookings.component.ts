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
  today = new Date();

  constructor(private http:HttpClient){
    const userId = localStorage.getItem('userId')
    this.isLoading = true
    this.http.get<any[]>(`https://angular-crud-7ld3.onrender.com/bookings/user/${userId}`).subscribe((res) => {
      this.bookings = res.sort((a, b) => {
        const dateA = new Date(a.journeyDate);
        const dateB = new Date(b.journeyDate);
        return dateB.getTime() - dateA.getTime() ;
      });
      console.log(res)
      this.isLoading = false
    })
  }

  isDateBeforeToday(journeyDate: string): boolean {
    const today = new Date();
    const journey = new Date(journeyDate);
    return journey < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  onCancleTicket(id:string){
    this.http.delete(`https://angular-crud-7ld3.onrender.com/bookings/${id}`).subscribe((res) => {
      const userId = localStorage.getItem('userId')
      this.isLoading = true
      this.http.get<any[]>(`https://angular-crud-7ld3.onrender.com/bookings/user/${userId}`).subscribe((res) => {
        this.bookings = res.sort((a, b) => {
          const dateA = new Date(a.journeyDate);
          const dateB = new Date(b.journeyDate);
          return dateB.getTime() - dateA.getTime() ;
        });
        
        this.isLoading = false
      })
    })
  }
  
}
