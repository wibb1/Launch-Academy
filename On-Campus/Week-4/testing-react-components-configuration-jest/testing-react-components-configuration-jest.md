## Learning Objectives

- Justify the need for the Enzyme library
- Install and configure Jest

## Getting Started

```no-highlight
et get testing-react-components-configuration-jest
cd testing-react-components-configuration-jest
yarn install
```

## Introduction

How do we test React components? React testing can be tricky because many libraries have a limited ability to traverse parent/child component "trees" and to deal with asynchronous Javascript. Luckily, we can use the well-documented Enzyme library created by AirBnb, which was specifically developed for React testing. Enzyme can be used with Jest, a popular testing framework with React developers. But first, some introductions.

### Jest

Testing in the JavaScript community is a bit of a mixed bag. Prior to the arrival of Jest, there was a lack of a "market leader" when it came to automated testing. Additionally, many of the available tools were difficult to configure and maintain. To test JavaScript code, developers often had to cobble together many libraries, and it took a lot of work to get them all playing together nicely.

Enter [Jest][jest-site], which was built specifically to address this issue. Jest was designed to be simple to configure and to provide comprehensive testing tools. That means the assertion library (which defines which assertions you can use in your tests), the test runner (responsible for actually running the test code), and even code coverage tooling (which lets you know how much of your codebase is covered by your tests) are baked in. For this reason, Jest has become overwhelmingly popular in recent years.

### Enzyme

[Enzyme][enzyme-docs] is a library built on top of React's [Test Utilities][react-docs-test-utils] add-on. Together, they provide the ability to navigate component trees, simulate events (like clicking or scrolling), and test component lifecycle methods (like `componentDidMount`).

There are many frameworks to choose from when it comes to testing React components; Enzyme is among the most popular.

## Setup

### Install Jest

```no-highlight
yarn add jest --dev
```

We also need to update our `package.json` so that we can run our suite. Let's update the script directive of our `package.json`.

```json
{
  "name": "testing-react-components-configuration-jest",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "./node_modules/.bin/jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "jest": "^24.9.0",
    "webpack": "~2.3.1",
    "webpack-dev-server": "~2.4.2"
  },
  "dependencies": {
    "react": "~16.8.0",
    "react-dom": "~16.8.0",
    "react-router-dom": "^5.0.0"
  }
}
```

This gives us the ability to run our test suite with `yarn test`. If we run it now, we'll see that we get an error that no tests were found. Don't worry - we'll fix that!

### Install Enzyme

To install enzyme, we will run the following:

```bash
yarn add --dev enzyme enzyme-adapter-react-16
```

This actually adds two packages: Enzyme and a package that configures Enzyme for the specific version of React we're using.

Now that the setup is done, let's check to see that it's configured properly!

## Test Your Configuration

We're going to create our first Jest test file. Place the following in `src/components/Elephant.test.js`. This is a Jest convention - we place our test files in the same directory as our implementation.

```javascript
import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import Elephant from "./Elephant"

describe("Elephant", () => {
  it("should return true", () => {
    expect(true).toEqual(true)
  })
})
```

Running `yarn test` should indicate something similar to the output below:

```no-highlight
yarn run v1.17.3
$ ./node_modules/.bin/jest
 PASS  src/components/ElephantContainer.test.js
  Elephant
    ✓ should return true (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.241s
Ran all test suites.
✨  Done in 4.61s.
```

## Why this Matters

Front-end applications tend to grow in complexity quite quickly as user interfaces become more interactive and the size of your application state increases. Testing your React application will allow you to better handle this complexity because your tests will inform you if new features have broken any existing ones.

### External Resources

- [Enzyme Docs][enzyme-docs]
- [Enzyme Docs: Shallow Rendering API][enzyme-docs-shallow-rendering-api]
- [Enzyme Docs: Full Rendering API][enzyme-docs-full-rendering-api]
- [React Docs: Test Utilities][react-docs-test-utils]

[jest-site]: https://jestjs.io
[enzyme-docs]: https://github.com/airbnb/enzyme
[enzyme-docs-full-rendering-api]: https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
[enzyme-docs-shallow-rendering-api]: https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
[react-docs-test-utils]: https://facebook.github.io/react/docs/test-utils.html
