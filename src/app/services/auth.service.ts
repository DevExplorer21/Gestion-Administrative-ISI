import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from './../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
providedIn: 'root'
})
export class AuthService {
userData$ = new BehaviorSubject<any>([]);

constructor(
private httpService: HttpService,
private storageService: StorageService,
private router: Router
) {}

getUserData() {
this.storageService.get(AuthConstants.AUTH).then(res => {
console.log(res);
    this.userData$.next(res);
});
}

login(postData: any): Observable<any> {
    console.log(postData);
    //console.log(this.httpService.get('user/'+postData.username+'/profile', postData, postData.username,postData.password));
return this.httpService.get('user/'+postData.username+'/profile', postData, postData.username,postData.password);
}

/*signup(postData: any): Observable<any> {
return this.httpService.post('signup', postData);
}
*/
logout() {
this.storageService.removeStorageItem(AuthConstants.AUTH);
this.userData$.next('');
this.router.navigate(['/login']);

}
}