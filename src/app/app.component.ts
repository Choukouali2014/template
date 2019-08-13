import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template';
  contacts: ContactI;
   contactFrom;
  constructor(private  fb: FormBuilder) {}
  //const subject = new BehaviorSubject<ContactI>();
  FormEditSave(contact?: ContactI) {
    return  this.contactFrom = this.fb.group({
      firstName: [!!contact ? this.contacts.firstName : '', [Validators.required]],
      lastName: [!!contact ? this.contacts.lastName : '', [Validators.required]],
      email: [!!contact ? this.contacts.email : '', [Validators.required]]
    });
  }
  onSubmit() {
    this.contacts = this.contactFrom.value;
    this.contactFrom.reset();
    console.log(this.contacts);
  }
  Reload(contact) {
    this.FormEditSave(contact);
    console.log(contact);
  }
  ngOnInit(): void {
    this.FormEditSave();



    // this.contactFrom.valueChanges.subscribe((contact) => {
    //   this.contacts = contact;
    // });
  }
}
export interface ContactI {
  firstName: string;
  lastName: string;
  email: string;
}
