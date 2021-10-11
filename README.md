Womply UI was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and [Storybook](https://storybook.js.org/)

[![Coverage Status](https://coveralls.io/repos/github/OtoAnalytics/react-shared-components/badge.svg?branch=master&t=IbYEhn)](https://coveralls.io/github/OtoAnalytics/react-shared-components?branch=development-guidelines)
[![CircleCI](https://circleci.com/gh/OtoAnalytics/react-shared-components.svg?style=shield&circle-token=7ddb03894d5d5bb6249c70104016f7cb5f9b67a5)](https://app.circleci.com/pipelines/github/OtoAnalytics/react-shared-components)



To create a status api token, go to your Project’s Settings (present on the top right corner) > API Permissions and create a token scoped to Status.


# Storybook React Shared Library #
This library uses Storybook to showcase components, you can find the production release here https://react-shared-components.womply.com/

## Development guidelines ##

This is an opinionated way on how to develop components in a way that saves time and makes developers work more efficiently and the output reusable.

When you get a ticket to develop a new feature that requires non existing components the approach you should take is the following:

* **Break up the page into components**: breaking things up makes it easier to tackle problems in smaller chunks and gives some space for reusability.

* **Identify shareable components**: If something is going to be used in more than one place or other developers can benefit from it. It makes sense to make it part of this library as long as it meets the following **criteria:**
    * All data required to create the output can be passed through props. This means it does not depend on parent state or page logic.
    * Does not make API calls.
    * Components can have an inner state that does not require additional third party libraries such as mobx or redux or anything that does not come in react itself. Hooks like useState and useReducer are ok as long the parent component does not need to know about them.
    * Does not have hard coded labels or texts. There could be exceptions to this rule but it's preferred to have all text injected by the parent component. Following this allows multilingual components if it's ever required. 
* **Test components**: Write snapshot tests and stories for storybook so others know how to use it.

## Developing Locally ##

When dealing with libraries it can be challenging to develop components and features at the same time when both of them belong to separate repositories. For this recommend cloning all the repositories you need and doing npm link.

https://docs.npmjs.com/cli/link



## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook app in the development mode.<br />
Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode and generates code coverage.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn publish:npm`

Will build the files and make them ready to publish on NPM `dist` folder.<br />

### `yarn build-storybook`

Will build storybook and make it ready for showcase to product.

More Details comming soon.

