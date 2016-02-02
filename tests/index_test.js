// browser - webdriver instance
describe('mocha spec examples', function() {
    it('should get home page', function* () {
        yield browser.url('/index.html');
        expect(yield browser.getTitle()).toBe('Browser Testing');
    });
});
