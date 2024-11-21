import { Injectable } from '@angular/core';
//import { Plugins } from '@capacitor/core';
//import { Storage } from '@ionic/storage';
//const { Storage } = Plugins;
@Injectable({
providedIn: 'root'
})
export class StorageService {
constructor() {}

// Store the value
 store(storageKey: string, value: any) {
  const encryptedValue = btoa(escape(JSON.stringify(value)));
  //var stor=new Storage();

  localStorage.setItem(
     storageKey,
    encryptedValue
  );
}
// Get the value
 get(storageKey: string) {
const ret =   localStorage.getItem(storageKey );
console.log(ret, storageKey);
if(ret)
return JSON.parse(unescape(atob(ret)));
else {return null;}
}

 removeStorageItem(storageKey: string) {
 
  localStorage.remove(storageKey );
}

// Clear storage
 clear() {
  
  localStorage.clear();
}
}