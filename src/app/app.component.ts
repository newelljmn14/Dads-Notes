import { Component, OnInit } from '@angular/core';
import { NewNoteFormComponent } from 'app/new-note-form/new-note-form.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  shouldCreateNewNote: boolean = false;
  firebaseTestText: string;

  constructor(private afDd: AngularFireDatabase) {}

  ngOnInit() {
    this.afDd.list('/test')
      .valueChanges()
      .subscribe(value => {
        console.log(value);
      });
  }

  renderNewNoteForm() {
    this.shouldCreateNewNote = true;
  }
}
