import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.page';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.page';
import { CastComponent } from './components/cast/cast.component';
import { MoreMoviesComponent } from './components/more-movies/more-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    NavbarComponent,
    MovieDetailsComponent,
    AppComponent,
    CastComponent,
    MoreMoviesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
