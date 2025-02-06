import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage {
  namalengkap: string = '';
  alamat: string = '';
  usia: number = 0;
  jenisperlombaan: string = '';
  nomorwhatsapp: number = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  // Fungsi untuk memeriksa apakah formulir valid
  isFormValid(): boolean {
    return this.namalengkap !== '' && this.alamat !== '' && this.usia > 0 && this.jenisperlombaan !== '' && this.nomorwhatsapp > 0;
  }

  daftar() {
    if (this.isFormValid()) {
      const data = {
        namalengkap: this.namalengkap,
        alamat: this.alamat,
        usia: this.usia,
        jenisperlombaan: this.jenisperlombaan,
        nomorwhatsapp: this.nomorwhatsapp
      };

      // Menambahkan data ke API
      this.apiService.addwidiaData(data).subscribe(response => {
        console.log('Data berhasil ditambahkan:', response);

        // Reset form setelah berhasil menambahkan data
        this.resetForm();

        // Arahkan ke halaman Data
        this.router.navigate(['/data']); 

        // Memanggil data terbaru untuk memperbarui data secara langsung
        this.apiService.getPendaftar().subscribe();
      });
    } else {
      console.log('Form tidak valid');
    }
  }

  // Fungsi untuk mereset form
  resetForm() {
    this.namalengkap = '';
    this.alamat = '';
    this.usia = 0;
    this.jenisperlombaan = '';
    this.nomorwhatsapp = 0;
  }
}
