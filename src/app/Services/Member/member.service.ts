import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface MemberResponse{
  id: number,

  name: string,

  familyName: string,

  accessionDate: Date,

  nationality: string,

  identityDocument: string,

  identityNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  saveMember(inputData: Object){
    return this.httpClient.post(`http://localhost:3030/api/member`,inputData);
  }

  getAllMember(){
    return this.httpClient.get('http://localhost:3030/api/member/all');
  }

  getOne(memberId: Number){
    return this.httpClient.get(`http://localhost:3030/api/member/num/${memberId}`);
  }

  getByName(name: string){
    return this.httpClient.get(`http://localhost:3030/api/member/name/${name}`);
  }

  getByFamilyName(fname: string){
    return this.httpClient.get(`http://localhost:3030/api/member/familyname/${fname}`);
  }

  updateMember(inputData: Object, memberId: number){
    return this.httpClient.put(`http://localhost:3030/api/member/${memberId}`,inputData);
  }

  deleteMember(memberId:Number){
    return this.httpClient.delete(`http://localhost:3030/api/member/${memberId}`);
  }

  getMembersWithPagination(page: number, size: number): Observable<MemberResponse[]> {
    const params = new HttpParams()
                  .set('page', page.toString())
                  .set('size', size.toString());
    return this.httpClient.get<MemberResponse[]>(`http://localhost:3030/api/member/paginated`,{params});
  }

}
