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


        /*As required, this is a test that loops through each feed in the allFeeds object
        and ensures it has a URL defined  and that the URL is not empty; writing is
        similar to the above given function.*/
        it('have a URL defined and the URL is not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) { //loop through the allFeeds
                //check if each element is defined
                expect(allFeeds[i].url).toBeDefined(); //delete url field of any feed to fail this
                //check if each element is not empty
                expect(allFeeds[i].url.length).not.toBe(0); //empty  url field of any feed to fail this
            }
        });

        /*This is a test that loops through each feed in the allFeeds object and ensures
        it has a name defined and that the name is not empty; writing is similar to the above*/
        it('have a name defined and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined(); //delete name field of any feed to fail this
                expect(allFeeds[i].name.length).not.toBe(0); //empty name of any feed to fail this
            }
        });
    });


    /*As required, this is a new test suite named "The menu" */
    describe('The menu', function() {
        /*This a test that ensures the menu element is hidden by default.*/
        let body = $('body');

         /*Check if the menu is initially hidden.*/
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true); //delete class or change name of class "menu-hidden" of body in index.html to fail this
        });

         /* Check if the menu changes visibility when the menu icon is clicked.*/
        it('changes visibility when the menu icon is clicked', function() {
            let menuIcon = $('.menu-icon-link');

            if(!body.hasClass('menu-hidden')) body.addClass('menu-hidden'); //ensure menu is hidden before show test
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false); //comment lines 130-132 in app.js to fail this

            if(body.hasClass('menu-hidden')) body.deleteClass('menu-hidden'); //ensure menu is visible before hide test
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true); //comment lines 130-132 in app.js to fail this
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
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /*We use beforeEach() and done() similar to "Initial Entries" suite.*/
        beforeEach(function(done) {
            loadFeed(1, function() { //load the next feed defined (index of 1)
                done();
            });
        });

        it('actually changes content', function(done) {
            /*check the entriesChanged variable that we introduced in app.js*/
            expect(entriesChanged).toBe(true);
            done();
        });
    });
}());
