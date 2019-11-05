import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BienvenidoPage } from '../bienvenido/bienvenido.page';
import { async } from 'q';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email: string = "";
  nombre= null;
  informacion= null;
  password: string= "";
  user: any[] = [];

  constructor(private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public navCtrl: NavController,
    private menu: MenuController,
   
  	public toastCtrl: ToastController) {
   }

  ngOnInit() {
    this.menu.close('first');
  }

  async prosesLogin(){
   
   
    if(this.email != "" && this.password != ""){
      let body = {
        email: this.email,
        password: this.password
       
      };
   
      this.postPvdr.postLogin(body).subscribe(
        (data) => { // Success
           
           var alertpesan = data.msg;
          if(data != ""){
            this.user = (data);
            //console.log(data);
            this.postPvdr.sendListSource(data);
            this.router.navigate(['/tabs']);
            this.email="";
            this.password="";
          } else {
             console.log("falso");
             this.Validar();  
            }
        },)  

    }else{
      const toast = await this.toastCtrl.create({
	  	message: 'Campos Vacios. Por favor, ingrese datos en los campos',
	  	duration: 3000
	  });
	  toast.present();
    }
  } 
  async Validar() {
    const toast = await this.toastCtrl.create({
      message: 'El nombre de usuario y contrasenias son incorrectos. Por favor intentalo nuevamente',
      duration: 5000
    });
    toast.present();
  }

  formRegister(){
  	this.router.navigate(['/register']);
  }
}
