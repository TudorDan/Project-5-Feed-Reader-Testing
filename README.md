# Feed Reader Testing

## Table of Contents

* [About The Project](#abouttheproject)
* [Project Instructions](#projectinstructions)
* [Tasks For Testing](#tasksfortesting)

## About The Project

The purpose of this project is to meet the requirements for the fifth assignment from the _Front-End Web Developer Nanodegree Program_. As requested, this is a readme file regarding the relevant details about the project and its dependencies.

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite!

## Project Instructions

Make sure you follow these steps:
* clone or download this repository to your local computer;
* unzip the folder (in case you downloaded);
* open **index.html** in your preferred browser.

At the bottom of the page, there is the Jasmine Spec Runner showing whether the tests are passing or not.

## Tasks For Testing

1. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
2. Return the `allFeeds` variable to a passing state.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. Write a new test suite named `"The menu"`.
6. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8. Write a test suite named `"Initial Entries"`.
9. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. Write a test suite named `"New Feed Selection"`.
11. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
12. No test should be dependent on the results of another.
13. Callbacks should be used to ensure that feeds are loaded before they are tested.
14. Implement error handling for undefined variables and out-of-bound array access.
15. When complete - all of your tests should pass.
