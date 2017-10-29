var webdriver = require('selenium-webdriver');
var fs = require('fs');

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
    return driver.takeScreenshot().then(function(data) {
        fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
            if(err) throw err;
        });
    })
};

// Input capabilities
var capabilities = {
  'browserName' : 'firefox', 
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com');
driver.manage().window().setSize(600, 400);
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
// driver.findElement(webdriver.By.name('btnK')).click();

driver.saveScreenshot('snapshot1.png');

// driver.getTitle().then(function(title) {
//   console.log(title);
// });

driver.quit();