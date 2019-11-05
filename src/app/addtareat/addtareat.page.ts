import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addtareat',
  templateUrl: './addtareat.page.html',
  styleUrls: ['./addtareat.page.scss'],
})
export class AddtareatPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  salir(){
   // this.navCtrl.pop();
   this.navCtrl.navigateBack('/tareas');
  }
}
