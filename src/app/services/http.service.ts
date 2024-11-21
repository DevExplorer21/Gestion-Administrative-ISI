import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
providedIn: 'root'
})
export class HttpService {
constructor(private http: HttpClient) {}

post(serviceName: string, data: any, user: string, password:string) {
const headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic '+btoa(user+':'+password)
  });
  
const options = { headers: headers, withCredintials: false };
const url = environment.apiUrl + serviceName;

return this.http.post(url, JSON.stringify(data), options);
}

get(serviceName: string, data: any, user: string, password:string) {
    const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+btoa(user+':'+password)
      });
      
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    
    return this.http.get(url, options);
    }
}