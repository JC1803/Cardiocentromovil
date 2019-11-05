import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { MenuController } from '@ionic/angular';
import { VerrolesPage } from '../verroles/verroles.page';
@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.page.html',
  styleUrls: ['./organigrama.page.scss'],
})
export class OrganigramaPage implements OnInit {
  users: any[] = [];
  areas: any[] = [];
  areassub: any[] = [];
  roles: any[] = [];
  area: string="";
  subareas: any[] = [];
  subarea: string="";
  constructor( private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    private menu: MenuController,
    public toastCtrl: ToastController,
    public modalCtr:ModalController
  ) { }

  ngOnInit() {
    this.menu.close();
    this.postPvdr.getAreaSub() .subscribe(
      (data) => { // Success
        if(data.json()!=null){
         // console.log(data.json());
          this.areas = data.json();
        //  console.log(this.subarea);
        }
      },
      (error) =>{
        console.error(error);
      }
    )

      
   
    /*this.postPvdr.getAreaSub() .subscribe(
      (data) => { // Success
        if(data.json()!=null){
          console.log(data.json());
          this.areassub = data.json();
        }
      },
      (error) =>{
        console.error(error);
      }
    )*/
  }
  async presentModal(rol:any[]) {
    //console.log(rol);
    const modal = await this.modalCtr.create({
      component: VerrolesPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
       rol
      }
    });
    return await modal.present();
  }  

  bussubarea(idarea){
    console.log(idarea);
      this.postPvdr.getSubareas(idarea).subscribe(
        (dato)=>{ 
          this.subareas=dato.json();
         
        } 
      )
  }
}
