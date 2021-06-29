import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList : any;
  data:any;

  constructor(private firebasedb : AngularFireDatabase) { }

  getUsers() {
    var a = this.firebasedb.database.ref('users/').once('value').then(snapshot => this.data = snapshot.val());
    return this.data
  }

  addUser(uname, password) {
    this.firebasedb.database.ref('users/').push({
      uname: uname,
      password: password,
    }, (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log("Data saved successfully!")
      }
    });
}

  logout(){
    
  }
}
