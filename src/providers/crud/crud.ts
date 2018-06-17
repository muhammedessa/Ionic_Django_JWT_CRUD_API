import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

  constructor(public storage: Storage ,public http: Http  ) {
    console.log('Hello CrudProvider Provider');
  }



  getPosts(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('Authorization', 'JWT '+value);
 
       this.http.get(apiKey+'/blog/', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }




 insertPosts(postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'JWT '+value);
     
     this.http.post(apiKey+'/blog/',  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}





editPosts(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'JWT '+value);

     this.http.put(apiKey+'/blog/' +id+'/',  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}





deletePosts(id ){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'JWT '+value);
    
     this.http.delete(apiKey+'/blog/'+'/'+id+'/',    {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}











}
