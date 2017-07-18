import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFormsComponent } from './characters-forms.component';

describe('CharactersFormsComponent', () => {
  let component: CharactersFormsComponent;
  let fixture: ComponentFixture<CharactersFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
