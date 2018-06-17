import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {


  myInfo = {
 
    name:'', 
    email:'', 
    subject:'', 
    date:'', 
    deiscription:'', 
  }





  constructor(public navCtrl: NavController, public navParams: NavParams,
    public crudProvider:CrudProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }







  insertData(){

    this.crudProvider.insertPosts(this.myInfo).then((result)=>{
      console.log(result)
      
      this.navCtrl.pop()
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })
   
   
   
   
   }










}
