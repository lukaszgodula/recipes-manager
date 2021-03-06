// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD7ArT6qVvlB3GYxXMP3wi1xiGbgnvEPl4',
    authDomain: 'recipes-manager-1376f.firebaseapp.com',
    databaseURL: 'https://recipes-manager-1376f.firebaseio.com',
    projectId: 'recipes-manager-1376f',
    storageBucket: 'recipes-manager-1376f.appspot.com',
    messagingSenderId: '925464073767'
  },
  apiUrl: 'http://localhost:3000/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
