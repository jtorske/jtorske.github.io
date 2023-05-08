import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  firstEmail: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {}

  sendEmail(): void {
    console.log(this.contactForm); // check the form object
    console.log(this.contactForm.valid); // check if the form is valid
  
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.get('from_name')?.value ?? '',
        from_email: this.contactForm.get('from_email')?.value ?? '',
        message: this.contactForm.get('message')?.value ?? '',
      };
  
      emailjs.send('service_ka7bwdr', 'template_l48nb63', templateParams, 'EVgnIVPBjqqLb3Vq4')
        .then(() => {
          console.log('Your message has been sent successfully!');
        }, (error) => {
          console.log('There was a problem sending your message.');
          console.error('EmailJS error:', error);
        });
      this.firstEmail = true;
    } else {
      console.log(this.contactForm.get('from_name')?.value); // check the value of 'from_name'
      console.log(this.contactForm.get('from_email')?.value); // check the value of 'from_email'
      console.log(this.contactForm.get('message')?.value); // check the value of 'message'
      alert("Please fill out all fields");
    }
  }
}  