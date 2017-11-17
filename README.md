# Project: Website Optimization
I will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

## Project Goals
### 1. PageSpeed Score: Critical Rendering Path
  - `index.html` achieves a `PageSpeed` score of at least 90 for Mobile and Desktop.

### 2. Getting Rid of Jank
  - **Frame Rate**
Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at `60fps` when scrolling.
  - **Computational Efficiency**
Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page. Resize time is shown in the browser developer tools.

### 3. Documentation
  - **README**
A `README` file is included detailing all steps required to successfully run the application and outlines the optimizations that the student made in `index.html` and `views/js/main.js` for `pizza.html`.
  - **Comments**
Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures.

## Project Details
### 1. Installing / Setting
  - Clone or download the [repository](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)
  - Set the project directory
  - Install [Grunt](https://gruntjs.com/getting-started)
```sh
$ npm install -g grunt-cli
$ npm install grunt--save-dev
```
  - Install [ngrok](https://www.npmjs.com/package/ngrok)
```sh
$ npm install ngrok --save-dev
```
  - Create `package.json`
```
$ npm init
```
  - Create `Gruntfile.js`
  - Add the Grunt plugins to the project
 ```
$ npm install grunt-pagespeed --save-dev
$ npm install load-grunt-tasks --save-dev
 ```
  - Run a local server

### 2. Optimizations
  - #### `index.html`
    -  Remove the Google Web Font API `<link>` from `<head>`
    -  Inline `style.css`
    -  Add media attribute in `print.css`
    -  Add script ga-lite, which is a small, cacheable subset of Google Analytics JS client, created by Jesse Luoto.
  - #### `views/js/main.js`
     - Before

### 3. Measuring
  - #### Google PageSpeed Insights
    - Before
    - After

  - #### Chrome Developer Tools
    - Before
    - After

## References
  - [Grunt Getting started](https://gruntjs.com/getting-started)
  - [ngrok - npm](https://www.npmjs.com/package/ngrok)
  - [Grunt PageSpeed with ngrok for local testing](https://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

