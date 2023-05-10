import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct welcome text', () => {
    const textElement = fixture.debugElement.query(By.css('.text'));
    expect(textElement.nativeElement.textContent).toContain('Welcome to my Portfolio');
  });

  it('should display the correct about text', () => {
    const aboutElement = fixture.debugElement.query(By.css('.about'));
    expect(aboutElement.nativeElement.textContent).toContain('I am a software engineering student at the University of Calgary');
  });

});
