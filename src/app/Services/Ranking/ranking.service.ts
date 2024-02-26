import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberResponse } from '../Member/member.service';

export interface RankingResponse{

  rank : number,

  score : number,

  member : MemberResponse,

  competition : MemberResponse,
}


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private httpClient:HttpClient) { }

  saveRanking(compName: string){
    return this.httpClient.get(`http://localhost:8080/api/ranking/calculate/${compName}`);
  }

  getTop3Rank(compName: string){
    return this.httpClient.get(`http://localhost:8080/api/ranking/top3/${compName}`);
  }


}
