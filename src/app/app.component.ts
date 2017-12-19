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
  filteredNotesArray = [];
  isFiltered: boolean = false;
  ownersFilter: string;
  forumFilter: string;
  assignedFilter: string;
  completionFilter: string;
  priorityFilter: string;

  constructor(private afDd: AngularFireDatabase) {}

  ngOnInit() {
    this.retrieveNotesFromServer();
    // this.filterOn('owners', 'd');
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

  hideNoteForm() {
    this.shouldCreateNewNote = false;
  }
    showNotesArray(notesArray) {
      console.log(notesArray)
    }

  filterOn(filterField: string, filterQuery: string) {
    this.afDd.list('/notes', ref => ref.orderByChild(filterField).equalTo(filterQuery))
      .valueChanges()
      .subscribe(value => {
        console.log(value);
        this.filteredNotesArray = value;
        this.toggleFilter();
      });
    
  }

  toggleFilter() {
    this.isFiltered = !this.isFiltered;
  }

}

