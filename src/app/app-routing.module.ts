// Angular modules
import { NgModule }          from '@angular/core';
import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';

// Components
import { NotFoundComponent } from './static/not-found/not-found.component';

const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path         : 'home',
    loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path         : 'game/snatch',
    loadChildren : () => import('./pages/game/snatch/snatch.module').then(m => m.SnatchModule),
  },
  {
    path         : 'game/spin',
    loadChildren : () => import('./pages/game/spin/spin.module').then(m => m.SpinModule),
  },
  {
    path         : 'game/pick',
    loadChildren : () => import('./pages/game/pick/pick.module').then(m => m.PickModule),
  },
  {
    path         : 'market-place',
    loadChildren : () => import('./pages/market-place/market-place.module').then(m => m.MarketPlaceModule),
  },
  {
    path         : 'merchant',
    loadChildren : () => import('./pages/merchant/merchant.module').then(m => m.MerchantModule),
  },
  {
    path         : 'play',
    loadChildren : () => import('./pages/play/play.module').then(m => m.PlayModule),
  },
  {
    path : 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'mega-reward',
    loadChildren: () => import('./pages/mega-reward/mega-reward.module').then(m => m.MegaRewardModule)
  },
  { path : '',   redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : NotFoundComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { relativeLinkResolution : 'legacy', onSameUrlNavigation : 'reload' })],
  exports : [RouterModule]
})
export class AppRoutingModule { }
