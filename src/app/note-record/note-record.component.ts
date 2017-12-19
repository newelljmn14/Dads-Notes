import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-record',
  templateUrl: './note-record.component.html',
  styleUrls: ['./note-record.component.css']
})
export class NoteRecordComponent implements OnInit {
  @Input() noteFromDatabase;
  owner: string;
  forum: string;
  assigned: string;
  completion: string;
  priority: string;
  shortDescription: string;
  longDescription: string;

  constructor() { }

  ngOnInit() {

  }

  test(note) {
    console.log(note)
  }

}
