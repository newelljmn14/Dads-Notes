import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2/angularfire2';

import { AppComponent } from './app.component';
import { NewNoteFormComponent } from './new-note-form/new-note-form.component';

  const config = {
    apiKey: 'AIzaSyDDYnV64PIbFVri-jIz85yFh7_RepKcO7k',
    authDomain: 'dad-s-notes.firebaseapp.com',
    databaseURL: 'https://dad-s-notes.firebaseio.com',
    projectId: 'dad-s-notes',
    storageBucket: '',
    messagingSenderId: '957706340333'
  };

@NgModule({
  declarations: [
    AppComponent,
    NewNoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
