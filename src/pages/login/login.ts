import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController , LoadingController} from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';

import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string = '';
  password:string = '';

  errorMsg:string;

  loading: any;


  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  showLoader(){
 
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
  
    this.loading.present();
  
  }
  











  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myLogIn(){
 
    if (this.username.trim() !== '' ) {    
      
     
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{



 
        let credentials = {
          username: this.username,
            password: this.password
        };
 
        this.showLoader();
        
         this.authService.login(credentials).then((result) => {
            console.log(result);
            this.loading.dismiss();
            this.navCtrl.setRoot(TabsPage);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
        
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password !  ')
   
    }
 
 

}



myLogOut(){
  this.authService.logout();
}

}
