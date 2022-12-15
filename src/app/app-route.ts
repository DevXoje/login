import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    //canActivate: [AuthenticationGuard]
  },
  /*  {
      path: '**',
      redirectTo: 'login'
    },*/
];

export const APP_ROUTES = RouterModule.forRoot(routes);
