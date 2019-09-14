import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, Config } from '@ionic/angular';
import { IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*  Font - Awsome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { ZnodeAccordionDirective } from './directives/znode-accordion.directive'
library.add(fas,far)// add all icons
import { PopupsPage } from "./popups/popups.page";
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
import { GetLocationPopUpPageModule } from './get-location-pop-up/get-location-pop-up.module';

@NgModule({
  declarations: [AppComponent, ZnodeAccordionDirective,
    PopupsPage
  ],
  entryComponents: [
    PopupsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
    , FontAwesomeModule
    , HttpClientModule
    , GooglePlacesAutocompleteComponentModule
    , GetLocationPopUpPageModule
    , IonicStorageModule.forRoot({ name: '__jppdb' }),  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
