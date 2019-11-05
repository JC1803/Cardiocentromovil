import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  dato: any[] = [];
  datos: any[] = [];
  id: string= "";
  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.postPvdr.$getListSource.subscribe(list => {console.log(list)
      
      //this.dato= list;
      this.id= list[0].Id_Usuario;
     // console.log(this.id);
      
      });

      this.postPvdr.buscarUsers(this.id).subscribe(
        (data) => { // Success
           
          this.datos= data.json();
          console.log(this.datos);
        },)  
  }

}
