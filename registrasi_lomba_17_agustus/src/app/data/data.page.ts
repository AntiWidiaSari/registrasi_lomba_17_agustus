import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  agustusData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Berlangganan ke BehaviorSubject untuk mendapatkan data terbaru
    this.apiService.agustusData$.subscribe(data => {
      // Mengurutkan data berdasarkan id, data terbaru memiliki id lebih besar
      this.agustusData = data.sort((a, b) => b.id - a.id);
    });

    // Ambil data pertama kali
    this.apiService.getPendaftar().subscribe();
  }
}
