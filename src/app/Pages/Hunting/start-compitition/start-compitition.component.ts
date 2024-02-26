import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CompititionResponse, CompititionService } from 'src/app/Services/Compitition/compitition.service';

@Component({
  selector: 'app-start-compitition',
  templateUrl: './start-compitition.component.html',
  styleUrls: ['./start-compitition.component.css']
})
export class StartCompititionComponent {
  constructor(private compititionService: CompititionService,
              private datePipe: DatePipe){}

  CompititionList!:CompititionResponse[];


  ngOnInit(){
    this.getAllCompetitions();
  }

  getAllCompetitions(){
    this.compititionService.getAllCompitition().subscribe((res:any) => {
      console.log(res.message);
      this.CompititionList = res.message;
    });
  }



  filterCompetitionsByDate(dateFilter: 'old' | 'present' | 'future'): void {
    const currentDate = new Date();
    // this.CompititionList = this.getAllCompetitions();
    if (dateFilter === 'old') {
      this.CompititionList = this.CompititionList.filter(comp => new Date(comp.date).toDateString() < currentDate.toDateString());
    } else if (dateFilter === 'present') {
        this.CompititionList = this.CompititionList.filter(comp => new Date(comp.date).toDateString() === currentDate.toDateString());
    } else if (dateFilter === 'future') {
        this.CompititionList = this.CompititionList.filter(comp => new Date(comp.date).toDateString() > currentDate.toDateString());
    } else {
        this.getAllCompetitions();
    }
  }
}
