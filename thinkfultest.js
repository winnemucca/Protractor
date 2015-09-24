// describe('registration', function() {
//   it('should visit thinkful and find the log in button', function() {
//     browser.get('http://www.espn.com/');
//     expect(element(by.css('.login-btn')).getInnerHtml()).toMatch(/Log In/);
//   });
// });


// ************the element function is used for finding HTML elemnts on your webpage
// ************* element.all is good for a list with multiple elements
// 
// describe('Protractor Demo App', function() {
//   it('should add one and two', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(2);

//     element(by.id('gobutton')).click();

//     expect(element(by.binding('latest')).getText()).
//         toEqual('3'); // This is wrong!
//   });
// });



describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('0');
  });
});


// browser	Loads new pages, reads properties
// element	Placeholder for one or more DOM elements. Similar to jQuery's $ and Angular's angular.element
// by	Used to find elements within a page via css selector, id, name and so on. This similar to the $() selector in jQuery and querySelectorAll in standard, DOM-oriented JavaScript code