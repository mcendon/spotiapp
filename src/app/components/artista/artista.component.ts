import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista: any = [];
  loading = true;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) { 
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {
  }

  getArtista = (id: string) => {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks = (id: string) => {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      this.loading = false;
    });
  }

}
