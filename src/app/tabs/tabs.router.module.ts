import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cart/cart.module').then(m => m.CartPageModule)
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../help/help.module').then(m => m.HelpPageModule)
          }

        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: 'edit-user-profile',
            loadChildren: () =>
              import('../edit-user-profile/edit-user-profile.module').then(m => m.EditUserProfilePageModule)
          },
          {
            path: 'booking-history',
            loadChildren: () =>
              import('../booking-history/booking-history.module').then(m => m.BookingHistoryPageModule)
          },
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'chef-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chef-profile/chef-profile.module').then(m => m.ChefProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
