import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../app.component'

//import { SettingPage } from '../setting/setting.page'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public menu: MenuController,
    public ap: AppComponent

    ) { }

  ngOnInit() {
    this.menu.close();
    
  }
  llamarmenu(){
    this.menu.open('first');
    this.ap.detalles();
  }
      
  }


