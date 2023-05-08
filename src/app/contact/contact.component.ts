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
    } else{
      alert("Please fill out all fields")
    }
  }
  
}
