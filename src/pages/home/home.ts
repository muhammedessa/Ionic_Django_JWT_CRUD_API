import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { EditPage } from '../edit/edit';
import { InsertPage } from '../insert/insert';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  mydata:any


  constructor(public navCtrl: NavController,
    public crudProvider:CrudProvider) {


  this.crudProvider.getPosts().then((data) => {
    console.log(JSON.stringify(data))
    this.mydata = data
  }).catch((err)=>{
    this.navCtrl.setRoot(LoginPage)
})

  }





  onEdit( id, name, email, subject, date, deiscription){

  
this.navCtrl.push(EditPage, {

  id:id, 
  name:name, 
  email:email, 
  subject:subject, 
  date:date, 
  deiscription:deiscription

})
    
  }




  inserPage(){
    this.navCtrl.push(InsertPage)
  }



  onDelete(id){


    this.crudProvider.deletePosts( id ).then((result)=>{
      console.log(result)

      this.crudProvider.getPosts().then((data) => {
        console.log(JSON.stringify(data))

        this.mydata = data
      }).catch((err)=>{
        this.navCtrl.setRoot(LoginPage)
    })
      
    },(err)=>{
      console.log("insert err: "+ err)
      this.navCtrl.setRoot(LoginPage)
    })
 

  }




  ionViewDidEnter() {

    this.crudProvider.getPosts().then((data) => {
      console.log(JSON.stringify(data))
      
      this.mydata = data
    }).catch((err)=>{
      this.navCtrl.setRoot(LoginPage)
  })

 
  }




}
