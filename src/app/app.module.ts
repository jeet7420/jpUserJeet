import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
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


// Import ionic-rating module
import { IonicRatingModule } from 'ionic-rating';
import { PopupIngredientsPage } from "./popup-ingredients/popup-ingredients.page";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent, 
    ZnodeAccordionDirective,
    PopupIngredientsPage
  ],
  entryComponents: [
    PopupIngredientsPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule , 
    FontAwesomeModule,
    IonicRatingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({ name: '__jppdb' })  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
