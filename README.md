# NPM dependencies viewer

The objective of this exercise was to build a working web application to present the complete dependencies tree of a given NPM package. For more details, see the full instructions below.

## Technical choices

The impementation needs to take into account concerns like API, scalability, monitoriing, storage... Considering the limited amount of time available (3h) to set up all this, I decided to leverage [AWS Amplify](https://aws.amazon.com/amplify/) to easily roll up the following stack.

This stack offers a lot of benefit sregarding the exercice's requirements:

- Out-of-the-box monitoring with [AWS CloudWatch](https://aws.amazon.com/cloudwatch/)
- AWS Lalbda functions offer easy scalability
- Standard API definition with [AWS API Gateway](https://aws.amazon.com/api-gateway/)

## Instructions

### Background

Developers working with NodeJS use packages in their code. A package is a functional NodeJS module that includes versioning, documentation, dependencies (in the form of other packages), and more. NodeJS has a managed packages environment called npm. npm is regularly updated with new packages and new versions of existing packages.
Snyk scans NodeJS packages to identify and assist developers in remediating vulnerabilities prior to merging their code back with its project. In order for Snyk to identify these vulnerabilities in certain packages, this is what happens:

1. The user provides the name of the package for analysis.
2. We fetch the overall set of dependencies from the relevant package manager, for the given package.
3. We compare the set of dependencies that we retrieve with our database of vulnerable packages in order to identify whether any of the dependencies are vulnerable. 4. For any package that we identify as vulnerable, we then list all available remediation paths (upgrades and/or patches for vulnerable packages) for the user.
4. The user chooses their preferred remediation actions from the list, and we apply them by creating a PR for the relevant repository.

### Exercise

This exercise focuses on stages 1 and 2 above, for a package that is already published on npmjs.com.
Your task is to design and implement a web service. This service should return the full package dependency tree based on a given package name (user input), which we could then later use for stage 3.
You can obtain package data through the npm registry using the following URL format: https://registry.npmjs.org/<package_name>/<version_or_tag>
For example: https://registry.npmjs.org/express/latest or https://registry.npmjs.org/async/2.0.1

### Things to consider

- There are currently over 1M packages on npmjs.com, and the number is growing all the time.
- The packages update from time to time, just as their dependencies do too.
- Consider these important factors that can make or break a great web service: API, architecture, data storage, low latency, scalability, monitoring, you name it :)

### Implementation

1. Create a working application that, given the name of a published npm package, returns the entire set of dependencies for the package.
2. Present the dependencies in a tree view.
3. We require tests. It’s up to you what style and how exhaustive these are. 4. Account for asynchronous fetching of dependencies as you see fit.
4. Consider caching relevant data so that repeated requests resolve with minimum latency. 6. Please use Git and, preferably, GitHub for your implementation. When using GitHub, please invite the snyk-exercise-review user to your repository if you wish to make it private.
   Good luck, and enjoy!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
