import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
//import { FormControl, FormArray,FormBuilder,FormGroup } from '@angular/forms';
//import AdvancedJSon from '../../assets/advanced_form.json';
//import FormJSon from '../../assets/simple_form.json';

import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
@Component({
  selector: 'app-excute',
  templateUrl: './excute.page.html',
  styleUrls: ['./excute.page.scss'],
})

export class ExcutePage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;

  constructor( private navCrtl : NavController, 
               private router: Router, private route: ActivatedRoute, 
               public formBuilder: FormBuilder,
               private service: HttpService,) 
  { }

  Form=[];

  goback(){
    this.navCrtl.pop();
  }
  ngOnInit() {
   

    //pour récupérer les données ml URL
   //const ProcessName=this.route.snapshot.queryParamMap.get('ProcessName');
   const ProcessID=this.route.snapshot.queryParamMap.get('ProcessID'); 
  //console.log(`ProcessName: ${ProcessName} - ProcessID: ${ProcessID}`);

  var UserName =localStorage.getItem('username');
  var Password=localStorage.getItem('password');

  // hedhi url à exécuter 
  //console.log(this.service.get('process-definition/'+ProcessID+'/form-variables',[],UserName,Password).subscribe());
  this.service.get('process-definition/'+ProcessID+'/form-variables',[],UserName,Password).subscribe((response:any)=>{
    let formList=[];
    let obj={};
    Object.keys(response).forEach(function (key){
      obj[key]=['', []];
      response[key]['name']=key;
      console.log('element',response[key]);
      formList.push(response[key]);
    })
    this.Form=formList;
    console.log('responsefromexcute', this.Form) ;
    console.log(obj) ;

    this.ionicForm = this.formBuilder.group(
      obj
    );

    //this.Form=response;
  });

  //'http://digitalisi.tn:8080/engine-rest/process-definition/'+name+'/form-variables'
  
}


get errorControl() {
  return this.ionicForm.controls;
}

submitForm() {
  //console.log('sakhta', processform);
  this.isSubmitted = true;
  if (!this.ionicForm.valid) {
    console.log('Please provide all the required values!', this.ionicForm.value)
    return false;
  } else {
    console.log('myform', this.ionicForm.value)
  }
}}

//"http://digitalisi.tn:8080/engine-rest/process-definition/"+name+"/submit-form";

//hedhom form 
 // myForm:FormGroup;
 // advancedForm=AdvancedJSon;
  //simpleForm=FormJSon;
 
/*
export interface Options {
  label?:string;
  placeholder?: string;
  required?: boolean;
  type?:string;
  children?: Array<FormControlObject>;
}
export interface FormControlObject{
  key:string;
  type:string;
  options:Options; 
}*/


///////////////////////////

