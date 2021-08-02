import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlotaComponent } from './pages/flota/flota.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo: 'flota',
    pathMatch: 'full'
  },
  {
    path: 'flota',
    component: FlotaComponent
  },
  {
    path : '**',
    redirectTo: 'flota',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
