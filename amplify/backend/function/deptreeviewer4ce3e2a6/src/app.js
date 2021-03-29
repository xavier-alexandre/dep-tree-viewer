/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var memoize = require("lodash/memoize");
var axios = require("axios");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Memoize calls to external API
const getPackage = (pkg, version) =>
  axios.get(`https://registry.npmjs.org/${pkg}/${version}`);
const getPackageMemoized = memoize(getPackage);

app.get("/tree", async (req, res) => {
  const pkg = req.query.package;
  const version = req.query.version;

  try {
    const packageFromNPM = await getPackageMemoized(pkg, version);

    res.json({
      success: "get call succeed!",
      pkg,
      version,
      dependencies: packageFromNPM.data.dependencies,
      url: req.url,
    });
  } catch (error) {
    // Send error 500
  }
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
