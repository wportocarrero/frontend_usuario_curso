import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class MinsaService {
  baseUrl:String = "http://localhost:8080/usuarios/";
  constructor(protected http: HttpClient) { }
  getUsers(){
    return this.http.get(this.baseUrl + 'all');
  }

  elminateUser(value:number){
    console.log(this.baseUrl + 'delete/' + value);
    return this.http.delete(this.baseUrl + 'delete/' + value);
  }

}
