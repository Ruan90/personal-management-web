import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [ LoginGuard ]
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [ AuthenticationGuard ]
  },
  { 
    path: 'conhecimento', 
    loadChildren: () => import('./conhecimento/conhecimento.module').then((m) => m.ConhecimentoModule),
    canLoad: [ AuthenticationGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
