import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { NavController } from '@ionic/angular';

import { StorageService } from './../../services/storage.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
 /* authUser: any;
  constructor(private authService: AuthService) {}*/

  constructor(private navCrtl : NavController, private str:StorageService){}
  ngOnInit() {
   /* this.authService.userData$.subscribe((res:any) => {
    this.authUser = res;
    })*/
    console.log(this.str);
    console.log(this.str.get('username'));
  }
  logoutAction() {
    //this.authService.logout();
    this.str.clear();
    this.navCrtl.navigateBack('');
  }
}
