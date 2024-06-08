import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../shared/model/stdInterface';
import { stdArray } from '../shared/const/stdArr';

@Component({
  selector: 'app-student-task',
  templateUrl: './student-task.component.html',
  styleUrls: ['./student-task.component.scss']
})
export class StudentTaskComponent implements OnInit {

  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('email') email  !: ElementRef
  @ViewChild('contact') contact  !: ElementRef

  studentArray : Array<Istd> = stdArray;
  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(){
    let obj : Istd = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contact.nativeElement.value
    }
    if(this.fname.nativeElement.value,
      this.lname.nativeElement.value,
      this.email.nativeElement.value,
      this.contact.nativeElement.value){
        console.log(obj)
        this.studentArray.push(obj)
    }
    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.contact.nativeElement.value = ''

  }

}

