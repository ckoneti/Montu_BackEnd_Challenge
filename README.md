Scenario:
=========

A developer on our team was working on integrating the TomTom API. They did a great job laying the groundwork, but they've recently been promoted to a new project that requires their full attention.

We are pretty confident the developer managed to complete the majority of the initial part of the integration, however there might be a bug or two to be discovered.

Your task is to finish off this implementation, ensuring the requirements are met with passing tests.


Task:
=====
To take a partial address input and return full address suggestions along with the address broken into its individual components using the TomTom API.


Resources:
==========

Place Search Documentation: https://developer.tomtom.com/search-api/documentation/search-service/search-service
API Key: Oyb0npJAVdRwDauqpFez7zKCy2euUYql

Install:
========
1. yarn install

Test:
=====
1. yarn install
2. yarn test


Requirements:
=============

1. All tests should pass and ensure good coverage for new work
2. We only allow Australian addresses to be returned
3. Code should be maintainable and consistent
4. The result elements should contain important information about the place (country, municipality, etc)
5. The returned result should be typed and easily consumable via users of the library
6. No front-end requirements are necessary, this is purely a backend NodeJS library


Description & Instructions:
=============
This is an api service that is used to take a partial AUS specific address input and returns 
specific details about an address using the TomTom API. The api is written in typescript and Node.js.

1. This api can be run using the command `yarn start` by uncommenting the lines 16-18 from index.ts and inputting an Australian street name in the `address` variable.
2. To get test coverage run `yarn test`
3. Linting can be run using `yarn lint` respectively

Coverage Report:
================
| File          | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
|---------------|-----------|------------|-----------|-----------|---------------------|
| All files     | 100       | 83.33      | 100       | 100       |                     |
| index.ts      | 100       | 75         | 100       | 100       | 7                   |
| maps-api.ts   | 100       | 100        | 100       | 100       |                     |
| ------------- | --------- | ---------- | --------- | --------- | ------------------- |

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.808 s, estimated 2 s
Ran all test suites.
✨  Done in 2.73s.
