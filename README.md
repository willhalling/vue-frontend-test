# Hex Digital Front End Technical Test

The challenge is to build an extremely simple application to display a price index for Bitcoin. 

The Coindesk API can be used to grab data for this (https://api.coindesk.com/v1/).

## The Test

We realise everyone has different levels of skill and experience when it comes to development so we have listed different levels of tasks below for you to choose from. If you do not have the time or the knowledge to complete them all then that's ok, we just want to see how you approach the problem and get a feel for how you code.

### Task One

Using the provided Coindesk API: 
1. Build an application which displays the current prices of Bitcoin in USD, GBP and EUR. The endpoint `/bpi/currentprice.json` can be used for this.
2. Add the ability to enter an amount in BTC and display the value of that in USD, GBP and EUR.
3. Style the application using SCSS, with an emphasis on scalability and re-usability, as if this was part of a much larger application (do not worry about the actual look and feel and the design will not be evaluated, but focus expressly on the modular nature of your SCSS). 

## Languages

This is a "client side" focused test so the end deliverable should be viewable as a standard website. How you get there is up to you, but a basic Vue application is included with this test as an optional starting point. The only constraints on technology are that you demonstrate capability with Vue and SCSS.

We don't require you to write any form of server component but ask that you consider how you can ensure your submission will run effectively on any potential reviewers computer. 

## Review Criteria

At a high level we will be looking for:
* Clear instructions for how to run the application on a reviewer's machine
* Good understanding of the tasks undertaken and content presented in a clear, understandable format
* Well structured, high quality code that has been considered with scalability and maintainability in mind
* Appropriate unit tests are desirable
* Good understanding of errors and how to handle them

## Getting Started

First, run `yarn install` to generate the node_modules required for the test.

Simply run `yarn serve` to spin up a local development server that will hot reload the Vue application. `yarn build` can be run to generate a final, deployable build.

Alternatively, if you go down your own route, please include instructions for the reviewer to setup and review the website.

## The Deliverable


* CSS: I've used BEM as the CSS naming convention.
* CSS: I've abstracted common styles into variables inside the scss folder.
* JS: I've abstracted the store logic into a module so it's scalable.
* JS: I've created a separate API file to decouple the API & store logic.
* TO DO: add tests 


Email as an attachment or a link the git bundled repository showing your commit history with all your commits on the master branch:

        git bundle create <anything>.bundle --all --branches

## Questions or Concerns

Just email jamie@hexdigital.com if you have any questions, and we'll endeavour to get back to you promptly. 
