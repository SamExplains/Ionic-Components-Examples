import {Component} from "@angular/core";


@Component({
  selector: 'app-touch-event',
  template: `<ion-item-group>
            <button ion-item (click)="onElementClicked()">Click Event</button>
            <button ion-item  (tap)="onElementTapped">Tap Event</button>
            <button ion-item (press)="onElementPressed()">Press Event</button>
            </ion-item-group>`
})
export class TouchComponent{
  onElementClicked(){
    console.log('Click');
  }

  onElementTapped(){
    console.log('Tapped');
  }

  onElementPressed(){
    console.log('Pressed');
  }
}
