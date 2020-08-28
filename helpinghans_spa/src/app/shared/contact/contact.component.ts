import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailService } from 'src/_services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private fb:FormBuilder,private mailService:EmailService) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.compose([Validators.email,Validators.required])]),
      message: new FormControl('',[Validators.required])
    })
  }

  sendEmail(FormData:any){
    this.mailService.sendEmail(FormData)
    .subscribe((response) => {
      console.log(response);
    })
  }
}
