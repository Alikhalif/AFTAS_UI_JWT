import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient:HttpClient) { }

  register(inputData: Object){
    return this.httpClient.post(`http://localhost:3030/register`,inputData);
  }


  login(inputData: Object){
    return this.httpClient.post(`http://localhost:3030/login`,inputData);
  }

}
