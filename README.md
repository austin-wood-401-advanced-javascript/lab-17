# lab-17
## General Operation

## How To Run the App:
### in the terminal while in the repository type the command: 
* node app.js <filename>

## Server Applications

### Deployment

 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable

### Testing
 * Write a complete set of tests for all data models, independent of the server
 * Use `supergoose` to test mongo models
 * For testing the server and routes, use `supergoose` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * For APIs, use Dredd to make assertions about your API using your API Blueprint docs
 * Your tests must be running green on travis.com

###  Documentation
## Link to the latest PR
* [Link](https://github.com/austin-wood-401-advanced-javascript/lab-16/pull/4)

#### Compose a UML or Process/Data Flow Diagram for every application
 [UML Reference](https://www.uml-diagrams.org/index-examples.html)

 * This should be the first thing you do when beginning work on a lab assignment.
 * Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

#### JSDoc
[Official Documentation](http://usejsdoc.org/about-getting-started.html) | [Cheat Sheet](https://devhints.io/jsdoc) | [Style Guide](https://github.com/shri/JSDoc-Style-Guide)

* Write proper jsdoc for every function, module, and class.
  * Be descriptive about the functions' purpose
  * Declare data types for params and return values
* Copy a proper jsdoc config file (ref: configs folder, class repo) into the `/docs/config` folder
* Create a `jsdoc` script in your package.json that will use that config file to generate documentation in the `/docs` folder
* Run `npm run jsdoc` to create documentation in the `docs` folder
* Add support for rendering JSDoc Documentation in your server
  * Create a static route in `/api/v1.js` that uses `express.static()` to map `/doc` to the `/docs` folder that will house the generated jsdoc

#### API Documentation

 * Add proper documentation for API Servers
   * API Blueprint: put an updated `api.apib` in the docs/config folder
   * Swagger: put an updated `swagger.json` file in the docs/config folder
   * Create an express route to surface live API docs using the appropriate config file 

---

## React Applications
 [UML Reference](hhttps://github.com/austin-wood-401-advanced-javascript/lab-16/blob/master/src/assets/IMG_1155.JPG)

### Deployment

 * For daily labs, using Codesandbox.io is sufficient for deployment
   * Note that you may have multiple tasks and sandboxes to be completed for a single "lab"
 * Your block projects (applications) must be deployed at AWS Cloudfront or Netlify
 * Use an automated deployment, connecting your repository to AWS through cloud formation

### Testing

  * Create snapshot tests for your applications
  * For components, do functional tests with enzyme mount with assertions on
    * Interactivity
    * Class/CSS Application
    * Visibility
    * State Changes
  * For reducers and hooks, create pure unit tests to assert their baseline functionality


### Documentation

#### Compose a UML or Process/Data Flow Diagram for every application
 [UML Reference](https://www.uml-diagrams.org/index-examples.html)

 * This should be the first thing you do when beginning work on a lab assignment.
 * Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

#### Component Documentation (Style Guide)
[Styleguidist Documentation](https://react-styleguidist.js.org/)

  * Describe your PropTypes
  * Document your components with Styleguidist
    * Use `<Component>.md` files to describe components and provide examples.
    * Setup your `package.json` to build your styleguide docs in a subfolder of `/build`, after your normal react `build` script runs
    * Ensure that your deployments are properly building your styleguidist docs
  * Note that for daily "practice" labs deployed at code sandbox, your styleguidist docs will not be buildable or viewable
    * Create and write them anyway (we will review them for completeness)

**Tests**

  * Must have a Travis URL to be considered (0 points otherwise)
  * Must have one solid unit/component fully tested with well scaffolded test plan for all others (1/2 credit)
  * 80% coverage to get full points
#### JSDoc
[Link to documentation](https://github.com/austin-wood-401-advanced-javascript/lab-16/tree/master/docs)
