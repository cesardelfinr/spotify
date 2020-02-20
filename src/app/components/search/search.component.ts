import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  mensaje: any;
  error: any;
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { }

buscar(termino: string){
  this.loading = true;
  this.spotify.getArtista( termino )
              .subscribe( (data:any) => {
                console.log(data);
                this.artistas = data;
                this.loading = false;
              });
  this.mostrarError(this.artistas);
}
mostrarError(data){
  if(data !== undefined){
    this.error = false;
    console.log('entro en el if', data);
    this.mensaje = 'al parecer el error es de token inválido por favor actualiza las credenciales';
  } this.error = true;
  console.log('entro en el else',data);
}

}
