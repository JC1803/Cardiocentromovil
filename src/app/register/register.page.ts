import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Storage } from '@ionic/Storage';
import { HttpClient} from '@angular/common/http';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  areas: any[] = [];
  area: string="";
  roles: any[] = [];
  rol: string="";
  subareas: any[] = [];
  subarea: string="";
  
  registros: any[] = [];
  iduser: string= "";

  username: string = "";
  apellido: string = "";
  cedula: string = "";
  email: string = "";
  direccion: string = "";
  celular: string = "";
  password: string = "";
  confirm_password: string = "";
  sexo: string = "";
  tipousuario: string = "";

  constructor( 
    private router:  Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    public alertController: AlertController,
    public toastCtrl: ToastController,
    public httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.postPvdr.getArea() .subscribe(
      (data) => { // Success
        if(data.json()!=null){
          console.log(data.json());
          this.areas = data.json();
        }
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  clicAre($event){
    
      console.log(this.area);
      this.postPvdr.getSubareas(this.area).subscribe(
        (dato)=>{ 
          this.subareas =dato.json();
        } 
      )
  }

  clicSuba ($event){
    
    console.log(this.subarea);
    this.postPvdr.getRoles(this.subarea).subscribe(
      (dato)=>{
        this.roles =dato.json();
      }
   )
  }
 
  async registro(){
    if(this.username==""){
        const toast = await this.toastCtrl.create({
          message: 'Falta Usuario',
          duration: 3000
        });
        toast.present();
    }else if(this.password==""){
          const toast = await this.toastCtrl.create({
          message: 'Falta Password',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.confirm_password){
          const toast = await this.toastCtrl.create({
          message: 'No coiniciden las passwords',
          duration: 3000
        });
        toast.present();
    }else if(this.email==""){
          const toast = await this.toastCtrl.create({
          message: 'Falta email',
          duration: 3000
          });
        toast.present();
    }else{
      let body = {
        Nombre: this.username,
        Apellido: this.apellido,
        Cedula: this.cedula,
        email: this.email,
        Direccion: this.direccion,
        Celular: this.celular,
        Sexo: this.sexo,
        Password: this.password,
        Id_tipo_Usuarios : this.tipousuario,

        //aksi: 'register'
      };
      
      
      console.log(body);
      this.postPvdr.postUser(body)
       .subscribe(async data =>{
           var alertpesan = data.msg;
           this.registro= data;
           this.iduser=data.Id_Usuario;
           console.log(this.iduser);
           const alert = await this.alertController.create({
           header: 'FELICITACIONES',
           message: 'El registro ha sido exitoso',
           cssClass: 'alertDanger',
           buttons: ['OK']
         });
    
         console.log(this.iduser);

         let body2 = {
           Id_Area: this.area,
           Id_Roles:this.rol,
           Id_Usuario:this.iduser
         }
         console.log(body2);
         this.postPvdr.postUsuariosRoles(body2).subscribe(
           (datos)=>{
          
         })
         await alert.present();
      
  
         if(data.succesful){
       
           const toast = await this.toastCtrl.create({
           message: 'Register succesful',
           duration: 3000
            });
            toast.present();
          
          }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
       
        
       }
       
       );
       
      
      this.router.navigate(['/login']);
    }

  
  }
}
