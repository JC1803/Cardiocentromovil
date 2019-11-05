import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { LoginPage } from './login/login.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { MenuController } from '@ionic/angular';
import { PostProvider } from '../providers/post-providers';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //rootPage:any = LoginPage;
  pages = [
    {
      title: 'Home',
      url: '../tabs',
      icon: 'home'
    }
    
  ];

  datos: any[] = [];
  id: string ="";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public menu: MenuController,
    private postPvdr: PostProvider,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });

    this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.router.navigate(['/register']);
      }else{
        this.router.navigate(['/login']);
      }
    });

    
  }
  cerrar(){
  this.menu.close();
  }

  public detalles() {
  this.postPvdr.$getListSource.subscribe(list => {
    //console.log(list)
    this.id= list[0].Id_Usuario;
    }).unsubscribe();
    
    this.postPvdr.buscarUsers(this.id).subscribe(
      (data) => { // Success
         
        this.datos= data.json();
        //console.log(this.datos);
      },)  


  }
}
