import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddtareaPage } from '../addtarea/addtarea.page';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tpersonal',
  templateUrl: './tpersonal.page.html',
  styleUrls: ['./tpersonal.page.scss'],
})
export class TpersonalPage implements OnInit {
  tareasp: any[] = [];
  tareasdetalle: any[] = [];
  datos: any[] = [];
  id2: string="";

  constructor(private menu: MenuController,
    public alertController: AlertController,
    public modalController: ModalController,
    private router: Router,
    private postPvdr: PostProvider

    ) { }

  ngOnInit() {
    this.menu.close();

    this.postPvdr.$getListSource.subscribe(list => {
      this.datos= list;
      this.id2=this.datos[0].Id_Usuario;
      //console.log(this.id2);
    }
    );

      this.postPvdr.getTareasP(this.id2).subscribe(
        (data) => {
         if(data.json()!= null){
           console.log(data.json());
            this.tareasp= data.json();
          }
        },
        (error)=> {
        console.error(error);
        }

      )
  }

  async presentModal( id) {
    console.log(id);
    const modal = await this.modalController.create({
      component: AddtareaPage,
      cssClass: 'my-custom-modal-css',
      componentProps:{
      id
      
      }
    
    });
    return await modal.present();
  }

 


  async mostrartareap(id){
    
    this.postPvdr.buscarTareas(id).subscribe(
     (dato) => { // Success
       if(dato !=null){
         this.tareasdetalle = dato.json();
       console.log(dato);
       this.postPvdr.sendListTarea(this.tareasdetalle);
       this.router.navigate(['/vertareap']);
       }
       
 
     },
     (error) =>{
       console.error(error);
     }
   )
  
 
   }

}
