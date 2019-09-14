import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'chef-profile', loadChildren: './chef-profile/chef-profile.module#ChefProfilePageModule' },
  { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'booking-history', loadChildren: './booking-history/booking-history.module#BookingHistoryPageModule' },
  { path: 'cost-breakup', loadChildren: './cost-breakup/cost-breakup.module#CostBreakupPageModule' },
  { path: 'popups', loadChildren: './popups/popups.module#PopupsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'edit-user-profile', loadChildren: './edit-user-profile/edit-user-profile.module#EditUserProfilePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' },  
  { path: 'get-location-pop-up', loadChildren: './get-location-pop-up/get-location-pop-up.module#GetLocationPopUpPageModule' },
  { path: 'get-address', loadChildren: './get-address/get-address.module#GetAddressPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
