import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class PostProvider {
	server: string = "http://localhost/login/serverionic/"; // default
	url: string = "http://localhost:8000/Usuarios";
	url1: string = "Usuarios";
	// if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 
	

	//VARIABLES PARA ALAMCENAR DATOS OBTENIDOS DE LAS API Y SER USADAS EN CUALQUIER LADO
	private listSource = new BehaviorSubject<any[]>([]);
	$getListSource =  this.listSource.asObservable();

	private listTarea = new BehaviorSubject<any[]>([]);
	$getLisTarea =  this.listTarea.asObservable();

	constructor(public http : Http) {
		
	}

	/////////////////////////////////APIS/////////////////////////////////////

	///////////////////////////GESTION USUARIOS/////////////////////////

	//FUNCION PARA EXTARER TODOS LOS USUARIOS
	getUsers() { 
		return this.http.get('http://18.188.234.88/Usuarios');

	};

	//FUNCION PARA ACTUALIZAR LOS DATOS DE UN USUARIO
	modUser(body, id) {
		console.log(body);
		console.log(id);
		let  params= new HttpParams().set(id,id);
		return this.http.put('http://18.188.234.88/Usuarios', body+ id);
		
		
	};
    //FUNCION PARA BUSCAR UN USUARIO POR ID

     buscarUsers(id) { 
	  return this.http.get('http://18.188.234.88/Usuarios/'+id);

      };

    //FUNCION PARA ELIMINAR UN USUARIO
	  deleteUsers(id){
		return this.http.delete('http://18.188.234.88/Usuarios');
	  }

    //FUNCION PARA INGRESAR DATOS DE UN USUARIO
	 postUser(body){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
         
		return this.http.post('http://18.188.234.88/Usuarios',body).map(res => res.json());
	  };
 
    //FUNCION PARA LOGIN DE UN USUARIO
	  postLogin(body){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
         //console.log(body);
		return this.http.post('http://18.188.234.88/Login',body).map(res => res.json());;
	  };

    //FUNCION PARA EXTARER TODOS LOS USUARIOS (PRUEBA)
	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());
	}

    //FUNCION PARA ALMACENAR DATOS DEL USUARIO LOGEADO
	//paso de datos
	sendListSource(list:any[]){
      this.listSource.next(list);
	}

    // GUARDAR DATOS DEL REGISTRO EN LA TABLA USUARIOS-ROLES
    postUsuariosRoles (body){
	 return this.http.post('http://18.188.234.88/UsuariosRoles',body).map(res => res.json());
     }

 ////////////////////////////////AREAS///////////////////////////////////////

    //FUNCIÓN PARA EXTRAER AREAS
    getArea() {
		return this.http.get('http://18.188.234.88/Area');
	};


    //FUNCIÓN PARA EXTRAER SUBAREAS DEPENDIENDO DEL AREA
    getSubareas(idar) {
	 return this.http.get('http://18.188.234.88/SubAreaPorArea/'+ idar);

    };

    //FUNCION PARA EXTRAER ROLES DEPENDIENDO DEL SUBAREA
    getRoles(idsub) {
     return this.http.get('http://18.188.234.88/RolesPorSubArea/'+ idsub);
	  //esta funcion me extrae los roles dependiendo del area	 
	  //return this.http.get('http://localhost:8000/RolesArId/'+ idar);
	};
	
//////////////////////////////////////////////////////////////////////////////////
    //Funcion para extraer areas, subareas, roles y usuarios
	
	getAreaSub (){
	 return this.http.get('http://18.188.234.88/Organigrama');
    }

/////////////////////////////////////TAREAS TRABAJO//////////////////////////////////////
 
    // FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (RESPONSABLE)
    getTareasRes(iduser) {
	  //console.log(iduser);
	  return this.http.get('http://18.188.234.88/MisTareasResponsables/'+iduser);

	};
	
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (OBSERVADOR)
    getTareasObser(iduser) {
	  console.log(iduser);	 
	  return this.http.get('http://18.188.234.88/MisTareasObservadores/'+iduser);

	};
	
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (PARTICIPANTES)
    getTareasPart(iduser) {
	  console.log(iduser); 
	  return this.http.get('http://18.188.234.88/MisTareasParticipantes/'+iduser);

	};
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (CREADAS POR MI)
    getTareasCreaP(iduser) {
	 console.log(iduser);	 
	 return this.http.get('http://18.188.234.88/MisTareasResponsables/'+iduser);

    };

    //funcion para buscar tareas con ID
    buscarTareas(id){
      console.log(id);
      return this.http.get('http://18.188.234.88/Tareas/'+ id);
	}
	
    //Almacenar las tareas buscadas
     sendListTarea(list:any[]){
	   this.listTarea.next(list);
    }
 /////////////////////////////////////////////TAREAS PERSONALES////////////////////////////////
 
    //FUNCION PARA EXTRAER TAREAS PERSONALES

    getTareasP(iduser) { 
	  return this.http.get('http://18.188.234.88/TareasPersonales/'+ iduser);
	};
	
	//FUNCION PARA CREAR UNA TAREA PERSONAL

	postTareasP(body) { 
		return this.http.post('http://18.188.234.88/Tareas', body);
	  };
}