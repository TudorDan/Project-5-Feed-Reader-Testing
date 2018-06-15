/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /*writing similar to the above given function*/
        it('have a URL defined and the URL is not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) { //loop through the allFeeds
                //check if each element is defined
                expect(allFeeds[i].url).toBeDefined();
                //check if each element is not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //similar to the above
        it('have a name defined and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /*get element using querySelector, according to FEND, Part 2,
         Lesson 20 "Creating Content with JavaScript"*/
        let el = document.querySelector('body');

         /*should grab the class, according to MDN "Element.className"*/
        it('is hidden by default', function() {
            expect(el.className).toBe('menu-hidden');//check if it's hidden
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            //we grab the first anchor element inside the hamburger menu
            let menuIcon = document.querySelector('.menu-icon-link');
            //we fire a click event, according to MDN "HTMLElement.click()"
            menuIcon.click();
            /*If we check in Developer Tools, we see that the class attribute
            from the body tag becomes empty when hamburger menu is clicked */
            expect(el.className).toBe(''); //check if it's empty
            menuIcon.click(); //click again
            expect(el.className).toBe('menu-hidden'); //check if it's hidden
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         /*We use beforeEach() and done() similar to the example given in FEND,
         Part 3, Lesson 22 "Writing Test Suites".
         We call beforeEach() when the async work is complete with an optional
         single argument, according to Jasmine introduction documentation.*/
        beforeEach(function(done) {
            /*Load the first feed defined (index of 0) and then call done()
            function since this spec will not complete until its done() is called.*/
            loadFeed(0, function() {
                done();
            });
        });
        /*The following spec is similar to the example given in Lesson 22, Section 18
        "Correcting our Asynchronous Test"*/
        it('should have at least an entry element within the feed container', function(done) {
            /*We grab the first entry element and expect it not to be without any value,
            using toBeNUll(), according to jasmine.github.io "introduction.js"*/
            expect(document.querySelector('.entry')).not.toBeNull();
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
