import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://67907039af8442fd73765792.mockapi.io/widia'; 
  private agustusDataSubject = new BehaviorSubject<any[]>([]);  
  public agustusData$ = this.agustusDataSubject.asObservable(); 

  constructor(private http: HttpClient) { }

  // Mengambil data dari MockAPI
  getPendaftar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => {
        // Update BehaviorSubject dengan data terbaru
        this.agustusDataSubject.next(data);
      })
    );
  }

  // Menambahkan data ke MockAPI
  addwidiaData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      tap(() => {
        // Setelah data berhasil ditambahkan, ambil data terbaru dan update BehaviorSubject
        this.getPendaftar().subscribe();
      })
    );
  }
}
