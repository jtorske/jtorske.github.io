import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of skills', () => {
    const compiled = fixture.debugElement.nativeElement;
    const skills = compiled.querySelectorAll('.skill');
    expect(skills.length).toEqual(6);
  });

  it('should display correct skill name and description', () => {
    const compiled = fixture.debugElement.nativeElement;
    const firstSkill = compiled.querySelector('.skill');
    expect(firstSkill.querySelector('h3').textContent).toContain('Python');
    expect(firstSkill.querySelector('p').textContent).toContain('Short description of skill 1.');
  });

  it('should display correct skill icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const firstSkill = compiled.querySelector('.skill');
    expect(firstSkill.querySelector('img').src).toMatch(/assets\/python\.png$/);
  });

 
});
