import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vertareap',
  templateUrl: './vertareap.page.html',
  styleUrls: ['./vertareap.page.scss'],
})
export class VertareapPage implements OnInit {
  datos: any[] = [];
  constructor(
    public alertController: AlertController,
    private postPvdr: PostProvider

  ) { }

  ngOnInit() {
    this.postPvdr.$getLisTarea.subscribe(list => {
      console.log(list)
      this.datos= list;
      });
  }
  async addTareap() {
    const alert = await this.alertController.create({
      header: 'Añadir Actividad',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Titulo'
        },
       
        {
          name: 'descrip',
          type: 'text',
          placeholder: 'Descripción'
        },
      
        // input date with min & max
        {
          name: 'fechain',
          label: 'Fecha Inicio',
          type: 'date'
         
        },
        {
          name: 'horai',
          type: 'time'
        },
        {
          name: 'fechafin',
          label: 'Fecha Fin',
          type: 'date'
         
        },
        // input date without min nor max
        
        {
          name: 'horaf',
          label: 'Hora Fin',
          type: 'time'
        
        
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
