import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
path: '',
loadChildren: () =>
import('./index/index.module').then(m => m.IndexPageModule)
},
{
path: '',
loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
},
  {
    path: 'process',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'excute',
    loadChildren: () => import('./pages/excute/excute.module').then( m => m.ExcutePageModule)
  }
  /*{
    path: 'excute/:id',
    loadChildren: () => import('./pages/excute/excute.module').then( m => m.ExcutePageModule)
  }*/
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}