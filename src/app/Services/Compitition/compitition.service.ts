import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface CompititionResponse{
  code: string,

  date: Date,

  startTime: Date;

  endTime: Date;

  numberOfParticipants: number,

  location: string,

  amount: number
}


@Injectable({
  providedIn: 'root'
})
export class CompititionService {

  constructor(private httpClient:HttpClient) { }

  saveCompitition(inputData: Object){
    return this.httpClient.post(`http://localhost:3030/api/compitition`,inputData);
  }

  getAllCompitition(){
    return this.httpClient.get('http://localhost:3030/api/compitition/all');
  }

  getOne(compititionId: string){
    return this.httpClient.get(`http://localhost:3030/api/compitition/${compititionId}`);
  }

  updateCompitition(inputData: Object, compititionId: string){
    return this.httpClient.put(`http://localhost:3030/api/compitition/${compititionId}`,inputData);
  }

  deleteCompitition(compititionId:string){
    return this.httpClient.delete(`http://localhost:3030/api/compitition/${compititionId}`);
  }

  getCompititionWithPagination(page: number, size: number): Observable<CompititionResponse[]> {
    const params = new HttpParams()
                  .set('page', page.toString())
                  .set('size', size.toString());
    return this.httpClient.get<CompititionResponse[]>(`http://localhost:3030/api/compitition/paginated`,{params});
  }
}
