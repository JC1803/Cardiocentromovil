import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit {
  reuniondetalle: any[] = [];
  constructor(private menu: MenuController,
    private router: Router,
    private postPvdr: PostProvider) { }

  ngOnInit() {
    this.menu.close();
  }


  async verreunions(id){
    
   // this.postPvdr.buscarTareas(id).subscribe(
    // (dato) => { // Success
      // if(dato !=null){
        // this.reuniondetalle = dato.json();
      // console.log(dato);
       this.postPvdr.sendListTarea(this.reuniondetalle);
       this.router.navigate(['/verreunion']);
       //}
       
 
    // },
    // (error) =>{
      // console.error(error);
    // }
   //)
  
 
   }
}
