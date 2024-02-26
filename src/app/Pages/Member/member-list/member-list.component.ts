import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberResponse, MemberService } from 'src/app/Services/Member/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {

  constructor(private memberService: MemberService){}

  memberList: MemberResponse[]=[];
  myMember!: MemberResponse;
  showPopup = false;

  searchTerm: string = '';

  page:number = 0;
  size:number = 10;

  ngOnInit(){
    // this.getAllMembers();
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getMembersWithPagination(this.page, this.size)
      .subscribe(data => this.memberList = data);
  }

  onPageChange(Ppage: number) {
    this.page = Ppage
    this.loadMembers();

    this.getNumberPages();
  }

  getNumberPages(){
    const totalMembers = this.memberList.length;
    const totalPages = Math.ceil(totalMembers / this.size);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  // getAllMembers(){
  //   this.memberService.getAllMember().subscribe((res:any) => {
  //     console.log(res.message);
  //     this.memberList = res.message;
  //   });
  // }

  filteredMembers(): MemberResponse[] {
    // console.log(this.searchTerm);

    return this.memberList.filter(member =>
      member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      member.familyName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteMember(id: number){
    this.memberService.deleteMember(id).subscribe({
      next:(value)=>{
        alert("Deleted Successfully");
        // this.getAllMembers();

      }
    });
    this.loadMembers()
  }

  editMember(member: MemberResponse){
    this.myMember=member;
    console.log(this.myMember.id);

    this.openPopup();
  }

  updateForm(){
    this.memberService.updateMember(this.myMember, this.myMember.id).subscribe({
      next:(res: any) => {
        console.log(res.message);
      },
      error:(err:any) => {
        console.log(err.error);
      },

    });
    this.closePopup()

  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}
