import { Component, OnInit } from '@angular/core';
import { NewNoteFormComponent } from 'app/new-note-form/new-note-form.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shouldCreateNewNote: boolean = false;
  firebaseTestText: string;
  notesArray = [];

  constructor(private afDd: AngularFireDatabase) {}

  ngOnInit() {
    this.retrieveNotesFromServer();

    console.log('notes array', this.notesArray);
  }

  renderNewNoteForm() {
    this.shouldCreateNewNote = true;
  }

  retrieveNotesFromServer() {
    this.afDd.list('/notes')
      .valueChanges()
      .subscribe(value => {
        this.notesArray = value;
      });
  }

  showNotesArray(notesArray) {
    console.log(notesArray)
  }
}
