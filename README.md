Auto Index


Install

  npm install @ibrokethat/auto-index

Usage

  //   assume an app structure of

  entities/
    media.js
    user.js
    etc...
  server,js

  //  create a file to indicate use of index generation

  touch entities/auto.index.named


  //  at the very top of server.js

  import '@ibrokethat/auto-index';

  //  then else where

  import * as entities from './entities/auto.index';

  entities.media.xxx
  entities.user.xxx

  //  all files in a directory must have either named exports OR default exports only

  touch entities/auto.index.named
  touch entities/auto.index.default


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
