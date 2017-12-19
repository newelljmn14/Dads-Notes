import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRecordComponent } from './note-record.component';

describe('NoteRecordComponent', () => {
  let component: NoteRecordComponent;
  let fixture: ComponentFixture<NoteRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
