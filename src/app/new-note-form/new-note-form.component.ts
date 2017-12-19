import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-new-note-form',
  templateUrl: './new-note-form.component.html',
  styleUrls: ['./new-note-form.component.css']
})
export class NewNoteFormComponent implements OnInit {
  @Output() successfulSubmission = new EventEmitter<boolean>();
  owners: string;
  assigned: string;
  forum: string;
  completionStatus: string;
  priority: string;
  shortDescription: string;
  longDescription: string;

  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
  }

  submitForm() {
    this.afDb.list('/notes')
      .push({
        'owners': this.owners,
        'assigned': this.assigned,
        'forum': this.forum,
        'completion': this.completionStatus,
        'priority': this.priority,
        'short-description': this.shortDescription,
        'long-description': this.longDescription
      })
      .then(() => {
        this.clearFields();
        alert('Your note has been successfully added');
        this.successfulSubmission.emit(true);
      });
  }

  clearFields() {
    this.owners = '';
    this.assigned = '';
    this.forum = '';
    this.completionStatus = '';
    this.priority = '';
    this.shortDescription = '';
    this.longDescription = '';
  }

  test() {
    console.log(this.owners);
  }

}
