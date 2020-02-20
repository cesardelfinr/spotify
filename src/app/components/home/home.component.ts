import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor(private spotify: SpotifyService) {
    
    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    })
  this.mostrarError(this.nuevasCanciones);
  }
  mostrarError(data) {
    if (data === null) {
      this.error = true;
      console.log("entro en el if", data);
      this.mensaje = "al parecer el error es de token inválido por favor actualiza las credenciales";
    }
    this.error = false;
    console.log("entro en el else", data);
  }

}
