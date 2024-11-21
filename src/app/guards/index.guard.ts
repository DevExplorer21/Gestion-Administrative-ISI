import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';

@Injectable({
providedIn: 'root'
})
export class IndexGuard implements CanActivate {
constructor(public storageService: StorageService, public router: Router) {}
canActivate(): Promise<boolean> {
return new Promise(resolve => {
var res= this.storageService.get(AuthConstants.AUTH);
console.log(res);
if (res) {
this.router.navigate(['home/process']);
resolve(false);
} else resolve(true);

});
}
}