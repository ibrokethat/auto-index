Auto Index

  Auto generate index files to reduce boiler plate code.

  Use case: commonjs require-all() type imports for ES6 modules

Install

  npm install @ibrokethat/auto-index

Usage

  //  add the following to .gitignore
  auto.index.js


  //   assume an app structure of
  app/
    entities/
      media.js
      user.js
      etc...
    server.js


  //  set appPath in your config.yaml, json, etc
  appPath: app


  //  create a file to indicate use of index generation
  //  the filename contains a reference to the export type of the modules
  //  to be indexed
  touch app/entities/auto.index.named
  OR
  touch app/entities/auto.index.default


  //  at the very top of server.js
  import '@ibrokethat/auto-index';


  //  then elsewhere
  import * as entities from './entities/auto.index';


  //  entities is now an object containing the exports of the files
  entities.media;
  entities.user;



Notes

  all files in a directory must have either named exports OR one default export



Test

  git clone git@github.com/ibrokethat/auto-index
  cd auto-index
  npm i
  npm test


License

(The MIT License)

Copyright (c) 2015 Simon Jefford si@ibrokethat.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
