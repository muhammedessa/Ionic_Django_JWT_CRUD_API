import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string = '';
  password:string = '';
  email:string = '';
  errorMsg:string;
  loading: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController, 
    public authService: AuthProvider ,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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



  myRegister(){
 
    if (this.email.trim() !== '' &&  this.username.trim() !==''    ) {    
 
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
          username: this.username,
            password: this.password
        };

        this.showLoader();
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            this.loading.dismiss();
            this.navCtrl.setRoot(LoginPage);          
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











}
