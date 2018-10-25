import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private items = ['French Bulldog', 'English Bulldog', 'American Bulldog'];

  constructor(public navCtrl: NavController ) {

  }

  onClick(){
    console.log('Clicked');
  }

  reorderListItems(index){
    this.items = reorderArray(this.items, index);
  }

}
