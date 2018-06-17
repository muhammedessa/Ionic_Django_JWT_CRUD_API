import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { CrudProvider } from '../providers/crud/crud';

import { EditPage } from '../pages/edit/edit';
import { InsertPage } from '../pages/insert/insert';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    EditPage,
    InsertPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot() ,
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    EditPage,
    InsertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CrudProvider
  ]
})
export class AppModule {}
