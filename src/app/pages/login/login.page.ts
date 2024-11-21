import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constants';
import { AuthService } from './../../services/auth.service';
//import { Storage } from '@ionic/storage';
 
import { StorageService } from './../../services/storage.service';

 
import { ToastService } from './../../services/toast.service';

@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
postData = {
username: '',
password: ''
};

constructor(
private router: Router,
private authService: AuthService,
private storageService: StorageService,
private toastService: ToastService
) {}

ngOnInit() {}

validateInputs() {
console.log(this.postData);
let username = this.postData.username.trim();
let password = this.postData.password.trim();
return (
this.postData.username &&
this.postData.password &&
username.length > 0 &&
password.length > 0
);
}

loginAction() {
if (this.validateInputs()) {
    console.log(this.postData);
    console.log(this.postData.username);
    console.log(this.postData.password);
   // console.log(this.authService.getUserData());
this.authService.login(this.postData).subscribe(
(res: any) => {
    console.log('login response',res);
    //this.toastService.presentToast(` ${res}`);
if (res) {
   // console.log(res.json());
// Storing the User data.
this.storageService.store(AuthConstants.AUTH, res);
//console.log(AuthConstants.AUTH);
//this.router.navigate(['home/process']);
console.log(this.postData);
localStorage.setItem('username', this.postData.username);
localStorage.setItem('password', this.postData.password);

this.router.navigateByUrl('home/process?UserName='+this.postData.username+'&Password='+this.postData.password);
//this.router.navigateByUrl(`home/process?UserName: ${res.userData}`);

} else {
this.toastService.presentToast('Incorrect username or password.');
}
},
(error: any) => {
this.toastService.presentToast('Network Issue.');
}
);
} else {
this.toastService.presentToast(
'Please enter username or password.'
);
}
}
}