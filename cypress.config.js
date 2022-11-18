const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_BASE_URL,
    env: {
      development: process.env.REACT_APP_DEV,
      booksApi: process.env.REACT_APP_BASE_API, // ..8080/books
    },
    pageLoadTimeout: process.env.REACT_APP_PAGE_LOAD_TIMEOUT,
    watchForFileChanges: false,

    defaultCommandTimeout: 8000,
    fileServerFolder: process.env.REACT_APP_SERVER_FOLDER, // stubServer
    setupNodeEvents(on, config) {
      // node evts
      console.log('\n\n -| config --> ', config, ' ..l__l__\n')
    },
  },
})
