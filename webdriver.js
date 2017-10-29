var webdriverio = require('webdriverio');
var options = { 
    host: 'http://selenoid:4444',
    desiredCapabilities: { 
        browserName: 'firefox', 
        version: '55.0' 
    } 
};
var options = { desiredCapabilities: { browserName: 'chrome' } };
var browser = webdriverio.remote(options);


browser.url('https://duckduckgo.com/').setViewportSize({
        width: 500,
        height: 500
    });
$('#search_form_input_homepage').setValue('WebdriverIO');
$('#btnG').click();
browser.saveScreenshot('web500-1.png');
browser.close();
// var body = $('body');
