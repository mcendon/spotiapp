import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipe/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ShowbadgePipe } from './pipe/showbadge.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    ShowbadgePipe,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
