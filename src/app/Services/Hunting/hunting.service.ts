import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HuntingResponse{
  id: number,
  nomberOfFish: number,
  fish_id: number,
  member_id: number,
  competition_id: number
}


@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(private httpClient:HttpClient) { }

  saveHunting(inputData: object[]){
    return this.httpClient.post(`http://localhost:8080/api/hunting`,inputData);
  }

  getAllHunting(){
    return this.httpClient.get('http://localhost:8080/api/hunting/all');
  }

  getOne(huntingId: Number){
    return this.httpClient.get(`http://localhost:8080/api/hunting/${huntingId}`);
  }

  updateHunting(inputData: Object, huntingId: number){
    return this.httpClient.put(`http://localhost:8080/api/hunting/${huntingId}`,inputData);
  }

  deleteHunting(huntingId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/hunting/${huntingId}`);
  }
}
