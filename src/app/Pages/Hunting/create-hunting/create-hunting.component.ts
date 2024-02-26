import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompititionResponse, CompititionService } from 'src/app/Services/Compitition/compitition.service';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { FishResponse, FishService } from 'src/app/Services/Fish/fish.service';
import { FormControl } from '@angular/forms';
import { MemberResponse, MemberService } from 'src/app/Services/Member/member.service';
import { Hunting } from 'src/app/Model/hunting';
import { HuntingService } from 'src/app/Services/Hunting/hunting.service';
import { RankingService } from 'src/app/Services/Ranking/ranking.service';

@Component({
  selector: 'app-create-hunting',
  templateUrl: './create-hunting.component.html',
  styleUrls: ['./create-hunting.component.css']
})
export class CreateHuntingComponent implements OnInit{
  searchControl = new FormControl();
  // items!: Observable<FishResponse[]>;
  fichs: FishResponse[] = [];

  myHunting: Hunting[] = [{
    // id:0,
    nomberOfFish: 0,
    fish_id: 0,
    member_id: 0,
    competition_id: 0

  }]


  constructor(private compititionService: CompititionService,
              private memberService: MemberService,
              private fishService: FishService,
              private huntingService: HuntingService,
              private rankingService: RankingService,
              private route: ActivatedRoute,
              private router: Router){}

  myCompitition!:CompititionResponse;
  memberList!: MemberResponse[];
  fishList!: FishResponse[];
  fishSelected!: FishResponse;

  compititionId!:any
  error!: any[]
  showPopup = false




  ngOnInit(){
    // this.searchControl.valueChanges.pipe(
    //   debounceTime(300),
    //   switchMap(value => this.fishService.searchMembersByName(value))
    // ).subscribe(fichs => this.fichs = fichs);


    this.compititionId = this.route.snapshot.paramMap.get('code');
    this.getOneCompitition(this.compititionId)

    this.getAllMembers();
    this.getAllFishs();

  }

  getOneCompitition(code:string){
    this.compititionService.getOne(code).subscribe((res:any) => {
      console.log(res.message);
      this.myCompitition = res.message;
    });

  }

  getAllMembers(){
    this.memberService.getAllMember().subscribe((res:any) => {
      console.log(res.message);
      this.memberList = res.message;
    });
  }


  getAllFishs(){
    this.fishService.getAllFish().subscribe((res:any) => {
      console.log(res.message);
      this.fishList = res.message;
    });
  }

  selectFish(event: any) {
    const selectedFishId = event.target.value;
    console.log(selectedFishId);

    this.fishService.getOne(selectedFishId).subscribe({
      next: (res: any) => {
        console.log(res.message, 'response');
        this.fishSelected = res.message
        // alert("selected successfuly");
      },
      error: (err: any) => {
        this.error = err;
        console.log(err.error, 'errors');
      },
    });

    this.showPopup = true;

  }

  closePopup(){
    this.showPopup = false;
  }


  submitForm(){
    let data = [{
      nomberOfFish: this.myHunting[0].nomberOfFish,
      fish_id: this.myHunting[0].fish_id,
      member_id: this.myHunting[0].member_id,
      competition_id: this.compititionId
    }]

    if(data[0].nomberOfFish > 0 ){
      this.huntingService.saveHunting(data).subscribe({
        next: (res: any) => {
          console.log(res.message, 'response');
          alert("created successfuly");
        },
        error: (err: any) => {
          this.error = err;
          console.log(err.error, 'errors');
          alert("Competition is closed");
        },
      });
    }
    else{
      alert("Please enter nomber of fish")
    }


    this.clear()

  }



  // saveRank(code:string){
  //   this.rankingService.saveRanking(code).subscribe((res:any) => {
  //     console.log(res.message);
  //     this.router.navigate(['/podium/'+code])
  //   });

  // }

  saveRank(code:string){
    this.rankingService.saveRanking(code).subscribe({
      next: (res:any) => {
        console.log(res.message);
        this.router.navigate(['/podium/'+code])
      },
      error: (err: any) => {
        this.error = err;
        console.log(err.error, 'errors');
        alert("eee"+err.error);
      }

    });

  }


  clear(){
    this.myHunting = [{
      // id:0,
      nomberOfFish: 0,
      fish_id: 0,
      member_id: 0,
      competition_id: 0

    }]
  }


}
