import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.page';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-details/:movieId', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
