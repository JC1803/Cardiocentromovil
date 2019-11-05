import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { VerperfilPage } from '../verperfil/verperfil.page';

@Component({
  selector: 'app-verroles',
  templateUrl: './verroles.page.html',
  styleUrls: ['./verroles.page.scss'],
})
export class VerrolesPage implements OnInit {

  constructor(public modalCtr:ModalController,
    public alertController: AlertController
   ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtr.dismiss(
    );}

    async perfilModal(usuario:any[], rol) {
     // console.log(usuario);
      const modal = await this.modalCtr.create({
        component: VerperfilPage,
        cssClass: 'my-custom-modal-css',
        componentProps: {
         usuario, 
         rol
        }
      });
      return await modal.present();
    }  
  
}
