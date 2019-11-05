import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
@Component({
  selector: 'app-vertarea',
  templateUrl: './vertarea.page.html',
  styleUrls: ['./vertarea.page.scss'],
})
export class VertareaPage implements OnInit {
  datos: any[] = [];
  constructor(

    private router:  Router,
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.postPvdr.$getLisTarea.subscribe(list => {
      console.log(list)
      this.datos= list;
      });
  }

}
