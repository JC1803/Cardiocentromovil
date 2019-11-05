import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from  './auth/auth.module';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-providers';
import { IonicStorageModule } from '@ionic/Storage';
import { Routes, RouterModule } from '@angular/router';
import { AddtareaPageModule } from './addtarea/addtarea.module';
import { VerrolesPageModule } from './verroles/verroles.module';
import { VerperfilPageModule } from './verperfil/verperfil.module';
//import { LoginPage } from './login/login.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),  
    AppRoutingModule, 
    AddtareaPageModule,
    VerrolesPageModule,
    VerperfilPageModule,
    HttpModule,
    AuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
