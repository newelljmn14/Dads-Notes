// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDDYnV64PIbFVri-jIz85yFh7_RepKcO7k',
    authDomain: 'dad-s-notes.firebaseapp.com',
    databaseURL: 'https://dad-s-notes.firebaseio.com',
    projectId: 'dad-s-notes',
    storageBucket: '',
    messagingSenderId: '957706340333'
  }
};