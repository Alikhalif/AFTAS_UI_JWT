import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Compitition } from 'src/app/Model/compitition';
import { CompititionResponse, CompititionService } from 'src/app/Services/Compitition/compitition.service';
import { CompititionListComponent } from '../compitition-list/compitition-list.component';

@Component({
  selector: 'app-create-compitition',
  templateUrl: './create-compitition.component.html',
  styleUrls: ['./create-compitition.component.css']
})
export class CreateCompititionComponent {

  constructor(private compititionService: CompititionService,
              private datePipe: DatePipe,
              private compititionListComponent: CompititionListComponent){}


  mycompitition: Compitition = {
    code: '',

    date: new Date,

    startTime: new Date,

    endTime: new Date,

    numberOfParticipants: 0,

    location: '',

    amount: 0
  }

  showPopup = false;
  formData: any = {};
  errors!: any[]
  CompititionList!:CompititionResponse[];


  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit(){
    this.getAllCompetitions()
  }

  submitForm() {
    const dateFormat = 'dd-MM-yy';
    const formattedDate = this.datePipe.transform(this.mycompitition.date, dateFormat);

    const locationCode = this.mycompitition.location.slice(0, 3).toLowerCase();

    const mcode = `${locationCode}-${formattedDate}`;
    this.mycompitition.code = mcode;

    console.log(mcode);
    console.log();



    this.compititionService.saveCompitition(this.mycompitition).subscribe({
      next: (res: any) => {
        console.log(res.message, 'response');
        alert("created successfuly");
      },
      error: (err: any) => {
        this.errors = err;
        console.log(err.error.errors, 'errors');
      },
      complete: () => {
        this.getAllCompetitions()
        this.closePopup();

      }
    });

    this.clear()


  }


  getAllCompetitions(){
    this.compititionService.getAllCompitition().subscribe((res:any) => {
      console.log(res.message);
      this.CompititionList = res.message;
    });
  }


  clear(){
    this.mycompitition = {
      code: '',

      date: new Date,

      startTime: new Date,

      endTime: new Date,

      numberOfParticipants: 0,

      location: '',

      amount: 0
    }
  }


}
