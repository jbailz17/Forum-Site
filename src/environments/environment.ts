// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyAw_VDxjh7KK-F_YtK2jJIDZQqc1q4D8z4',
    authDomain: 'forum-site-4ae89.firebaseapp.com',
    databaseURL: 'https://forum-site-4ae89.firebaseio.com',
    projectId: 'forum-site-4ae89',
    storageBucket: 'forum-site-4ae89.appspot.com',
    messagingSenderId: '111714602685'
  },

  algolia: {
    appId: 'LEGVGPVGUA',
    apiKey: '28e3b56f5b2dca34ea6759f1d1b5d45c',
    indexName: 'getstartetd_actors',
    urlSync: false
  }

};
