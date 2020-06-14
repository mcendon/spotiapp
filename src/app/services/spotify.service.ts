import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  authorization = 'BQClt-0mHEMcYT_1_JPTpcwCOY8i627OUwU3RJp7sbefyAfxFukHy6NmlxAC8lf6es8vYcus3jlJ5KuGsbH4rJLaDmIYu9gp-oS-c4XPH-XVzpagw_vA1DVZpSKJnwzILgMLa2CrDA9wS8rf';
  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getQuery = (query: string, params: any = {}): Observable<any> => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authorization}`
    });
    return this.http.get(url, {headers, params});
  };

  getNewReleases = () => (
    this.getQuery('browse/new-releases')
    .pipe( map( (data: any) => data.albums.items) )
  )

  getArtistas = ( termino: string ) => (
    this.getQuery('search', {
      q: termino,
      type: 'artist',
      limit: '15'
    }).pipe( map( (data: any) => data.artists.items ))
  )

  getArtista = ( id: string ) => this.getQuery(`artists/${ id }`);

  getTopTracks = ( id: string ) => this.getQuery(`artists/${ id }/top-tracks`, {country: 'es'})
  .pipe(map(data => data.tracks))
}
