gemini.suite('jumbotron', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.jumbotron')
        .capture('plain');
});