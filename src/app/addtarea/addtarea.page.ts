import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { toDate } from '@angular/common/src/i18n/format_date';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { formatDate } from '@angular/common';

//import { format } from 'path';
@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.page.html',
  styleUrls: ['./addtarea.page.scss'],
})
export class AddtareaPage implements OnInit {

  nombre: string = "";
  descripcion: string = "";
  fechai: Date;
  horai: Time;
  fechaf: Date= new Date();
  horaf: Time;
  creacion;
  fechacrea:Date;
  idusuario: string = "";




  constructor(
    public navPar: NavParams,
    public modalCtrl : ModalController,
    public toastCtrl: ToastController,
    private postPvdr: PostProvider,
    private router:  Router,
    @Inject(LOCALE_ID) private locale: string

    ) {
     
     
    
     this.creacion = new Date().toISOString().substr(0,10);
     
    //var  casa= new Date();
    // console.log(new Intl.DateTimeFormat('en-US').format(casa));
   // console.log(this.creacion.toISOString());

    // this.creacion=new Date();


      // this.creacion = formatDate(new Date().toISOString().substr(0,10), 'dark', this.locale);
     }

  ngOnInit() {
  
   

    
  }

  closeModal() {
   this.modalCtrl.dismiss(
   );
  
  }

 async  guardar (id){
   console.log(id);
    if(this.nombre==""){
      const toast = await this.toastCtrl.create({
        message: 'Falta Nombre de tarea',
        duration: 3000
      });
      toast.present();
  
  }else if (this.descripcion==''){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta Descripción',
      duration: 3000
    });
    toast.present();
  }else{
    let body = {
      Id_Usuario: "118",
      //Id_Usuario: id,
      Estado_Tarea: "Pendiente",
      Id_Tipo_Tarea: "4",
      Nombre: this.nombre,
      FechaInicio: this.fechai,
      FechaFin: this.fechaf,
      FechaCreacion: this.creacion,
      Descripcion: this.descripcion,
      Hora_Inicio: this.horai,
      Hora_Fin: this.horaf,
      tip_tar: "T"

      //aksi: 'register'
    };
    console.log(body);
    this.postPvdr.postTareasP(body).subscribe(async data =>{
      const toast = await this.toastCtrl.create({
        message: 'Guardado',
        duration: 3000
      });
      toast.present();
      this.closeModal();
    })
    
  }

}

}
