const {Builder, By, Key, until} = require('selenium-webdriver');
/* Dependency Modules*/
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");

// Application Server
const serverUri = "http://localhost:3000/#";

/** Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
    return new Promise((resolve, reject) => {
     browser.getTitle().then(function(title) {
      resolve(title);
     });
    });
   }

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await Driver.get(serverUri)
    .then(logTitle)
    .then(title => {
        assert.strictEqual(title, appTitle);
        resolve();
       })

    await driver.quit();

})();