/*
 * Copyright 2016 Brigham Young University
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
'use strict';

// const AWS = require('aws-sdk');

exports.handler = function (event, context) {

    console.log("Hello!");

    // if (event.httpMethod === 'OPTIONS') {
    //     context.succeed({
    //         statusCode: 200,
    //         headers: {},
    //         body: ""
    //     });
    // }

    // returnFormattedResponse(context, 200, {Hello: "David"});
};

function returnFormattedResponse(context, statusCode, body) {
    console.log("statusCode: " + statusCode);
    console.log("body: " + JSON.stringify(body));
    var response = {
        statusCode: statusCode,
        headers: {},
        body: JSON.stringify(body)
    };
    console.log("response: " + JSON.stringify(response));
    console.log("response.body: " + response.body);
    context.succeed(response);
}