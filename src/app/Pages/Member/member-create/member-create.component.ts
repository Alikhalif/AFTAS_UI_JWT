import { Component } from '@angular/core';
import { Member } from 'src/app/Model/member';
import { MemberService } from 'src/app/Services/Member/member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent {

  constructor(private memberService: MemberService){}

  myMember: Member = {
    name: '',

    familyName: '',

    accessionDate: new Date,

    nationality: '',

    identityDocument: '',

    identityNumber: ''
  }


  showPopup = false
  error!: any[]

  openPopup(){
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit(){

  }

  submitForm(){
    this.memberService.saveMember(this.myMember).subscribe({
      next: (res: any) => {
        console.log(res.message, 'response');
        alert("created successfuly");
      },
      error: (err: any) => {
        this.error = err.error;
        console.log(err.error.errors, 'errors');
      },
      complete: () => {
        this.closePopup();

      }
    });

    this.clear()
  }


  clear(){
    this.myMember = {
      name: '',

      familyName: '',

      accessionDate: new Date,

      nationality: '',

      identityDocument: '',

      identityNumber: ''
    }
  }

}
