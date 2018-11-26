import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http, RequestOptions } from '@angular/http';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;  
  jwt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  LoginRequest() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');    
    const requestOptions = new RequestOptions({ headers: headers });


    let json = '{"auth": {"email": "' + this.email + '", "password": "' + this.password + '"}}';
    this.http.post("http://127.0.0.1:3000/user_token", json, requestOptions)
      .subscribe(data => {
        let response = JSON.parse(data['_body']);
        headers.append("Authorization", response.jwt)
      //response[0]['email']
        this.http.get("http://127.0.0.1:3000/friends/1", requestOptions)
        .subscribe(data => {
          let response = JSON.parse(data['_body']);
          this.navCtrl.push(TabsPage, {
            text: "Fernando"
          });          
          
        }, error => {
          console.log("credenciales invalidas");
        });
        
      }, error => {
        console.log("credenciales invalidas");
      });
  }

}
