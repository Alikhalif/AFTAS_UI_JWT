import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingResponse, RankingService } from 'src/app/Services/Ranking/ranking.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {

  constructor(private rankingService:RankingService,
              private route: ActivatedRoute){}

  compititionId!:any
  myRankings!:RankingResponse[];

  ngOnInit(){
    this.compititionId = this.route.snapshot.paramMap.get('code');
    this.getRank(this.compititionId);

  }


  getRank(compititionId:string){
    this.rankingService.getTop3Rank(compititionId).subscribe((res:any) => {
      console.log(res.message);
      this.myRankings = res.message;
    });

  }





}
