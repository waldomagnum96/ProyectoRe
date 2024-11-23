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

