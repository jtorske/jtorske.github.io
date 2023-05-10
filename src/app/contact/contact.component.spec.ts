import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    spyOn(emailjs, 'send').and.returnValue(Promise.resolve({ text: 'OK', status: 200 } as EmailJSResponseStatus));
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined form controls', () => {
    expect(component.contactForm.contains('from_name')).toBeTruthy();
    expect(component.contactForm.contains('from_email')).toBeTruthy();
    expect(component.contactForm.contains('message')).toBeTruthy();
  });

  it('form should be invalid when controls are empty', () => {
    component.contactForm.controls['from_name'].setValue('');
    component.contactForm.controls['from_email'].setValue('');
    component.contactForm.controls['message'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('form should be valid when controls are filled correctly', () => {
    component.contactForm.controls['from_name'].setValue('Test Name');
    component.contactForm.controls['from_email'].setValue('test@example.com');
    component.contactForm.controls['message'].setValue('Test Message');
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should call emailjs.send when form is valid', async () => {
    component.contactForm.controls['from_name'].setValue('Test Name');
    component.contactForm.controls['from_email'].setValue('test@example.com');
    component.contactForm.controls['message'].setValue('Test Message');
    await component.sendEmail();
    expect(emailjs.send).toHaveBeenCalled();
  });

  it('should not call emailjs.send when form is invalid', async () => {
    component.contactForm.controls['from_name'].setValue('');
    component.contactForm.controls['from_email'].setValue('');
    component.contactForm.controls['message'].setValue('');
    await component.sendEmail();
    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
