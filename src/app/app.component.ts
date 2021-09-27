import { MinsaService } from './minsa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'apoyo';
  products: any[] = [];
  myForm: FormGroup;
  Medicamentos: any[] = [];
  usuarios: Object;
  constructor(
    protected MinsaService: MinsaService,public fb: FormBuilder
  ) {

    this.myForm = this.fb.group({
      BuscarMed: [''],
      })
      
  }
  ngOnInit(){
    //get
    this.MinsaService.getUsers()
    .subscribe(
      (data) => { // Success
        this.usuarios = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    ); 

    // post
    //const data:any = {};
   // data.term = "Q";
   // data.avanzado = "0";


  }

  delete(value) {
    this.MinsaService.elminateUser(value);
  }


    saveData(){
      console.log("ok");
    }
  }
