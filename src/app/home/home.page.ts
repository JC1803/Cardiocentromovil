import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any[] = [];
  eventSource= [];
  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) {}


  ngOnInit() {
    
  }
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  onEventSelected (){

  }
  onViewTitleChanged (){

  }
  onTimeSelected(){

  }
}
