import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getNewReleases = () => {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBm62bWi9_bAYLhHODWGX2yzVNEnMBxk-QJK67u8sJm7EgsU0Zp5JVXNmdLuZqWkyMZs89VY0GmWeaz96M'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    });
  }
}
