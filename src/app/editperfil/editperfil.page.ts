import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.page.html',
  styleUrls: ['./editperfil.page.scss'],
})
export class EditperfilPage implements OnInit {
  datos: any[] = [];
  id: string="";

  username: string="";
  apellido: string = "";
  cedula: string = "";
  email: string = "";
  direccion: string="";
  celular: string = "";
  sexo: string = "";
  constructor(
    private router:  Router,
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
    
      this.id=this.datos[0].Id_Usuario;
      this.username = this.datos[0].Nombre;
      this.apellido = this.datos[0].Apellido;
      this.cedula = this.datos[0].Cedula;
      this.email = this.datos[0].email;
      this.direccion = this.datos[0].Direccion;
      this.celular = this.datos[0].Celular;
      this.sexo = this.datos[0].Sexo;


      console.log(this.id);
      });


  }

async actualizar(){
  let body = {
    Nombre: this.username,
    Apellido: this.apellido,
    Cedula: this.cedula,
    email: this.email,
    Direccion: this.direccion,
    Celular: this.celular,
    Sexo: this.sexo,
    
};

this.postPvdr.modUser(body, this.id).subscribe(async data=> {

this.router.navigate(['/perfil']);

});
}

}





