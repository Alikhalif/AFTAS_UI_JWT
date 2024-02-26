import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompititionResponse, CompititionService } from 'src/app/Services/Compitition/compitition.service';

@Component({
  selector: 'app-compitition-list',
  templateUrl: './compitition-list.component.html',
  styleUrls: ['./compitition-list.component.css']
})
export class CompititionListComponent implements OnInit{
  constructor(private compititionService: CompititionService,
              private datePipe: DatePipe){}

  CompititionList!:CompititionResponse[];
  compititionUpdat!:CompititionResponse;
  compSave!:CompititionResponse;

  showPopup = false;

  searchTerm: string = '';

  page:number = 0;
  size:number = 10;

  ngOnInit(){
    this.getAllCompetitions();
  }

  loadCompititions(): void {
    this.compititionService.getCompititionWithPagination(this.page, this.size)
      .subscribe(data => this.CompititionList = data);
  }

  onPageChange(Ppage: number) {
    this.page = Ppage
    this.loadCompititions();

    this.getNumberPages();
  }

  getNumberPages(){
    const totalCompitition = this.CompititionList.length;
    const totalPages = Math.ceil(totalCompitition / this.size);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  filtered(): CompititionResponse[] {
    return this.CompititionList.filter(compitition =>
      compitition.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      compitition.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getAllCompetitions(){
    this.compititionService.getAllCompitition().subscribe((res:any) => {
      console.log(res.message);
      this.CompititionList = res.message;
    });
  }


  deleteCompitition(id: string){
    this.compititionService.deleteCompitition(id).subscribe({
      next:(value)=>{
        alert("Deleted Successfully");
        this.getAllCompetitions();
      }

    })
  }

  editCompitition(compitition: CompititionResponse){
    this.compititionUpdat=compitition;
    console.log(this.compititionUpdat.code);

    this.openPopup();
  }

  updateForm(){
    var compititionSave = {
      code: this.compititionUpdat.code,

      date: this.compititionUpdat.date,

      startTime: this.compititionUpdat.startTime,

      endTime: this.compititionUpdat.endTime,

      numberOfParticipants: this.compititionUpdat.numberOfParticipants,

      location: this.compititionUpdat.location,

      amount: this.compititionUpdat.amount
    }


    const dateFormat = 'dd-MM-yy';
    const formattedDate = this.datePipe.transform(compititionSave.date, dateFormat);

    const locationCode = compititionSave.location.slice(0, 3).toLowerCase();

    const mcode = `${locationCode}-${formattedDate}`;
    compititionSave.code = mcode;


    this.compititionService.updateCompitition(compititionSave, this.compititionUpdat.code).subscribe({
      next:(res: any) => {
        console.log(res.message);
      },
      error:(err:any) => {
        console.log(err.error);
      }
    })
  }


  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}
