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
    loadChildren: () => import('./pages/residentevilzero/residentevilzero.module').then( m => m.ResidentevilzeroPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'testeoapi',
    loadChildren: () => import('./pages/testeoapi/testeoapi.module').then( m => m.TesteoapiPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'apiresident',
    loadChildren: () => import('./pages/apiresident/apiresident.module').then( m => m.ApiresidentPageModule)
  },
  {
    path: 'pluginnativo',
    loadChildren: () => import('./pages/pluginnativo/pluginnativo.module').then( m => m.PluginnativoPageModule)
  },
  {
    path: 'residentzerobows',
    loadChildren: () => import('./pages/residentzerobows/residentzerobows.module').then( m => m.ResidentzerobowsPageModule)
  },


  {
    path: 'rezeroperso',
    loadChildren: () => import('./pages/rezeroperso/rezeroperso.module').then( m => m.RezeropersoPageModule)
  },

  {
    path: 'rezeroarmas',
    loadChildren: () => import('./pages/rezeroarmas/rezeroarmas.module').then( m => m.RezeroarmasPageModule)
  },

  {
    path: 'rezerohistoria',
    loadChildren: () => import('./pages/rezerohistoria/rezerohistoria.module').then( m => m.RezerohistoriaPageModule)
  },

  {
    path: 'reremake',
    loadChildren: () => import('./pages/reremake/reremake.module').then( m => m.ReremakePageModule)
  },

  {
    path: 'reremakebow',
    loadChildren: () => import('./pages/reremakebow/reremakebow.module').then( m => m.ReremakebowPageModule)
  },

  {
    path: 'reremakeperso',
    loadChildren: () => import('./pages/reremakeperso/reremakeperso.module').then( m => m.ReremakepersoPageModule)
  },

  {
    path: 'reremakearmas',
    loadChildren: () => import('./pages/reremakearmas/reremakearmas.module').then( m => m.ReremakearmasPageModule)
  },

  {
    path: 'reremakehistoria',
    loadChildren: () => import('./pages/reremakehistoria/reremakehistoria.module').then( m => m.ReremakehistoriaPageModule)
  },

  {
    path: 're2',
    loadChildren: () => import('./pages/re2/re2.module').then( m => m.Re2PageModule)
  },

  {
    path: 're2bow',
    loadChildren: () => import('./pages/re2bow/re2bow.module').then( m => m.Re2bowPageModule)
  },

  {
    path: 're2perso',
    loadChildren: () => import('./pages/re2perso/re2perso.module').then( m => m.Re2persoPageModule)
  },

  {
    path: 're2arma',
    loadChildren: () => import('./pages/re2arma/re2arma.module').then( m => m.Re2armaPageModule)
  },

  {
    path: 're2histo',
    loadChildren: () => import('./pages/re2histo/re2histo.module').then( m => m.Re2histoPageModule)
  },

  {
    path: 're3',
    loadChildren: () => import('./pages/re3/re3.module').then( m => m.Re3PageModule)
  },

  {
    path: 're3bow',
    loadChildren: () => import('./pages/re3bow/re3bow.module').then( m => m.Re3bowPageModule)
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

