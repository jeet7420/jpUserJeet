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
        path: 'getLocationPopup',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../get-location-pop-up/get-location-pop-up.module').then(m => m.GetLocationPopUpPageModule)
          }
        ]
      },
      {
        path: 'getAddress',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../get-address/get-address.module').then(m => m.GetAddressPageModule)
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
        ]
        , canActivate: [AuthGuard]
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
        ]
        , canActivate: [AuthGuard]
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
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../signup/signup.module').then(m => m.SignupPageModule)
          }
        ]
      },
      {
        path: 'otp',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../otp/otp.module').then(m => m.OtpPageModule)
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
