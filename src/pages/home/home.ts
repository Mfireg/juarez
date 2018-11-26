import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Headers, Http, RequestOptions  } from '@angular/http';

import 'rxjs/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Data
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('text'));
  }

  ngOnInit(){
    console.log(this.email);
  }
}
