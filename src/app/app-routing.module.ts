import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundPage } from './pages/notfound/notfound.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'tabsgeneral',
    loadChildren: () => import('./pages/tabsgeneral/tabsgeneral.module').then( m => m.TabsgeneralPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'bonustab',
    loadChildren: () => import('./pages/bonustab/bonustab.module').then( m => m.BonustabPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'residentevilzero',
    loadChildren: () => import('./pages/residentevilzero/residentevilzero.module').then( m => m.ResidentevilzeroPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'testeoapi',
    loadChildren: () => import('./pages/testeoapi/testeoapi.module').then( m => m.TesteoapiPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'apiresident',
    loadChildren: () => import('./pages/apiresident/apiresident.module').then( m => m.ApiresidentPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'pluginnativo',
    loadChildren: () => import('./pages/pluginnativo/pluginnativo.module').then( m => m.PluginnativoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'residentzerobows',
    loadChildren: () => import('./pages/residentzerobows/residentzerobows.module').then( m => m.ResidentzerobowsPageModule), canActivate: [AuthGuard]
  },


  {
    path: 'rezeroperso',
    loadChildren: () => import('./pages/rezeroperso/rezeroperso.module').then( m => m.RezeropersoPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'rezeroarmas',
    loadChildren: () => import('./pages/rezeroarmas/rezeroarmas.module').then( m => m.RezeroarmasPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'rezerohistoria',
    loadChildren: () => import('./pages/rezerohistoria/rezerohistoria.module').then( m => m.RezerohistoriaPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'reremake',
    loadChildren: () => import('./pages/reremake/reremake.module').then( m => m.ReremakePageModule), canActivate: [AuthGuard]
  },

  {
    path: 'reremakebow',
    loadChildren: () => import('./pages/reremakebow/reremakebow.module').then( m => m.ReremakebowPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'reremakeperso',
    loadChildren: () => import('./pages/reremakeperso/reremakeperso.module').then( m => m.ReremakepersoPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'reremakearmas',
    loadChildren: () => import('./pages/reremakearmas/reremakearmas.module').then( m => m.ReremakearmasPageModule), canActivate: [AuthGuard]
  },

  {
    path: 'reremakehistoria',
    loadChildren: () => import('./pages/reremakehistoria/reremakehistoria.module').then( m => m.ReremakehistoriaPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're2',
    loadChildren: () => import('./pages/re2/re2.module').then( m => m.Re2PageModule), canActivate: [AuthGuard]
  },

  {
    path: 're2bow',
    loadChildren: () => import('./pages/re2bow/re2bow.module').then( m => m.Re2bowPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're2perso',
    loadChildren: () => import('./pages/re2perso/re2perso.module').then( m => m.Re2persoPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're2arma',
    loadChildren: () => import('./pages/re2arma/re2arma.module').then( m => m.Re2armaPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're2histo',
    loadChildren: () => import('./pages/re2histo/re2histo.module').then( m => m.Re2histoPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're3',
    loadChildren: () => import('./pages/re3/re3.module').then( m => m.Re3PageModule), canActivate: [AuthGuard]
  },

  {
    path: 're3bow',
    loadChildren: () => import('./pages/re3bow/re3bow.module').then( m => m.Re3bowPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're3pero',
    loadChildren: () => import('./pages/re3pero/re3pero.module').then( m => m.Re3peroPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're3arma',
    loadChildren: () => import('./pages/re3arma/re3arma.module').then( m => m.Re3armaPageModule), canActivate: [AuthGuard]
  },

  {
    path: 're3histo',
    loadChildren: () => import('./pages/re3histo/re3histo.module').then( m => m.Re3histoPageModule), canActivate: [AuthGuard]
  },


  { path: 'not-found', component: NotfoundPage },
  { path: '**', redirectTo: 'not-found' },
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

