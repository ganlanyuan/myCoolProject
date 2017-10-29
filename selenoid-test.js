// selenoid test
var fs = require('fs');
var path = require('path');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox', '23.0')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('https://christianpost.com');
// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });

driver.manage().window().setSize(600, 400);
driver.findElement(By.css('body')).takeScreenshot().then(function(data){
  var base64Data = data.replace(/^data:image\/png;base64,/,"")
  fs.writeFile('test.png', base64Data, 'base64', function(err) { if(err) { console.log(err); } });

  // To close the current tab.    
  // driver.findElement(By.css("body")).sendKeys(webdriver.KeysCONTROL + "w");
});

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed: ' + title);
//     }
//   });
// });

driver.quit();