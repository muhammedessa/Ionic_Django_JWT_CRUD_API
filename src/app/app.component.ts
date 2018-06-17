import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any  ;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    public authService: AuthProvider, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  
  
  
  
    this.authService.checkAuthentication().then((res)=>{
      console.log("res : " + res)
  
      if (res === '') {
        this.rootPage  =LoginPage;
      } else {
        this.rootPage  =TabsPage;
      }
      
    })
  
  
  
  
  
  
  
  
  }
}
