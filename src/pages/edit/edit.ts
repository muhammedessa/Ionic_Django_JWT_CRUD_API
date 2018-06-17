import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {



  myInfo = {
   
    name:'', 
    email:'', 
    subject:'', 
    date:'', 
    deiscription:'', 
  }
  
  id=''

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public crudProvider:CrudProvider) {


      this.id = navParams.get('id');
      this.myInfo.name = navParams.get('name');
      this.myInfo.email = navParams.get('email');
      this.myInfo.subject = navParams.get('subject');
      this.myInfo.date = navParams.get('date');
      this.myInfo.deiscription = navParams.get('deiscription');



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }






  myUpdate(){



    this.crudProvider.editPosts(this.id,this.myInfo).then((result)=>{
      console.log(result)
      
      this.navCtrl.pop()
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })
 


  }









}
