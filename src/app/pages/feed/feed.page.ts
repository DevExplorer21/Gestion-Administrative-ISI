import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute} from '@angular/router';

@Component({
selector: 'app-feed',
templateUrl: './feed.page.html',
styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
    constructor(private navCtrl : NavController, 
        private router: Router, 
        private service: HttpService,
        private route: ActivatedRoute)
    {}
    
/*public authUser: any;
constructor(private auth: AuthService) {}
*/

/* hedha solution 1 w na7i e stat
// hedhi ta3 liste stat
imageURL="assets/images/process.webp";
ProcessName="Process i";

// hedhi ta3 liste dyn
process ={
imageURL :"assets/images/logo.png",
ProcessName :"Process "
}

// hedha taa l'affichage 9adeh mn marra 
loopCounter =[1,2,3,4];
*/

//pour récupérer les données ml URL
   //const UserName=this.route.snapshot.queryParamMap.get('UserName');
   //const Password=this.route.snapshot.queryParamMap.get('Password'); 
  //console.log(`ProcessName: ${ProcessName} - ProcessID: ${ProcessID}`);
  
// solution 2 
/*processList =[
    {"ProcessName": "Process", "imageURL":"assets/images/process.webp", "ProcessNum": "1"},
    {"ProcessName": "Process", "imageURL":"assets/images/process.webp","ProcessNum": "2"},
    {"ProcessName": "Process", "imageURL":"assets/images/process.webp", "ProcessNum": "3"}
];*/
processList=[];

// hedhi bech temchy lel interface 3
excute(procid: any)
{
    console.log('myid',procid);
    //this.router.navigate(['excute']);
    this.router.navigateByUrl('excute?ProcessID='+procid);
   // const UserName=this.route.snapshot.queryParamMap.get('UserName');
//const Password=this.route.snapshot.queryParamMap.get('Password'); 
//console.log(`UserName11111: ${UserName} - Password: ${Password}`);
    
//this.router.navigateByUrl('home/process?UserName='+this.postData.username+'&Password='+this.postData.password);

}
// another method
navigateWithObject(){
    const params: NavigationExtras={
        queryParams:{userid:123}
    }
    this.router.navigate(['excute'], params);
}
/*excute()
{this.navCtrl.navigateForward(['excute']);}
*/ 
ngOnInit() {
/*this.auth.userData$.subscribe((res:any) => {
this.authUser = res;
});*/

const UserName=this.route.snapshot.queryParamMap.get('UserName');
const Password=this.route.snapshot.queryParamMap.get('Password'); 
console.log(`UserName: ${UserName} - Password: ${Password}`);
  

//console.log(this.service.get('process-definition?latest=true&active=true&startableInTasklist=true&startablePermissionCheck=true&firstResult=0&maxResults=15',[],localStorage.getItem('userData').username,));
console.log(this.service);
//console.log(this.service.get('process-definition?latest=true&active=true&startableInTasklist=true&startablePermissionCheck=true&firstResult=0&maxResults=15',[],localStorage.getItem('userData').username,));
console.log(this.service.get('process-definition?latest=true&active=true&startableInTasklist=true&startablePermissionCheck=true&firstResult=0&maxResults=15',[],UserName,Password).subscribe());

this.service.get('process-definition?latest=true&active=true&startableInTasklist=true&startablePermissionCheck=true&firstResult=0&maxResults=15',[],UserName,Password).subscribe((response:any)=>
{
    //console.log(response);
    this.processList=response;
    console.log('my list',this.processList);
});

}
}