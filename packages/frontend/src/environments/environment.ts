// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  forceEnvironment: {
    maxUploadSize: '250',
    logo: '/assets/logo.png',
    baseUrl: 'https://app.wafrn.net/api',
    baseMediaUrl: 'https://media.wafrn.net',
    externalCacheurl: 'https://cdn.wafrn.net.net/api/cache/?media=',
    frontUrl: 'https://wafrn.vercel.app',
    shortenPosts: 5,
    reviewRegistrations: true,
    disablePWA: false,
    maintenance: false,
    webpushPublicKey: ''
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
