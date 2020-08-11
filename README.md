# finn_tone_api

FinnToneApi - JavaScript client for finn_tone_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install finn_tone_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your finn_tone_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FinnToneApi = require('finn_tone_api');


var api = new FinnToneApi.StatusApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.livenessCheck(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://finntest.commitzero.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FinnToneApi.StatusApi* | [**livenessCheck**](docs/StatusApi.md#livenessCheck) | **GET** /status/alive | Kubernetes liveness check
*FinnToneApi.StatusApi* | [**readinessCheck**](docs/StatusApi.md#readinessCheck) | **GET** /status/ready | Kubernetes readiness check
*FinnToneApi.ToneApi* | [**loadToneById**](docs/ToneApi.md#loadToneById) | **GET** /tone/{userId} | Get tone of a user


## Documentation for Models

 - [FinnToneApi.Error](docs/Error.md)
 - [FinnToneApi.Tone](docs/Tone.md)


## Documentation for Authorization

All endpoints do not require authorization.