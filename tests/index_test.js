// browser - webdriver instance
describe('Index Page', function() {
    it('should have title', function* () {
        yield browser.url('/index.html');
        expect(yield browser.getTitle()).toBe('Browser Testing');
    });
    it('shoud have Stackla widget', function* () {
        yield browser.url('/');
        expect(yield browser.isExisting('.stackla-widget'));
    });
});
