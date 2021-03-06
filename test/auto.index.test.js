import co from 'co';
import fs from 'co-fs';
import assert from 'assert';
import sinon from 'sinon';
import CONF from 'config';
import underTest from '../index';
import {expect} from 'chai';


let files = {
  namedIndex: process.cwd() + '/test/app/auto.index.js',
  defaultIndex: process.cwd() + '/test/app/defaultExport/auto.index.js',
  noIndex: process.cwd() + '/test/app/false/auto.index.js'
};


describe("auto index failure", () => {

  var appPath;

  beforeEach(()  =>  {

    appPath = CONF.appPath;

    delete CONF.appPath;

  });


  afterEach(() => {

    CONF.appPath = appPath;

  });


  it('should throw a reference error if no appPath is specified in the config', () => {

    expect(underTest).to.throw(ReferenceError);

  });


});


describe("auto index success", () => {

  beforeEach(()  =>  {

    underTest();

  });


  afterEach(() => {

  });


  it('should create index files in the correct directories', (done) => {

    co(function* () {

      let exists = yield fs.exists(files.namedIndex);

      expect(exists).to.be.true;

      exists = yield fs.exists(files.defaultIndex);

      expect(exists).to.be.true;

      exists = yield fs.exists(files.noIndex);

      expect(exists).to.be.false;

      done();

    });

  });


  it('should generate default export index files', () => {

    // import statements shouldn't go here - but as we're babelled to the max...
    import * as defaultExport from './app/defaultExport/auto.index';

    expect(new defaultExport.a().prop).to.equal(10);
    expect(defaultExport.b()).to.equal('default');

  });


  it('should generate named export index files', () => {

    //  import statements shouldn't go here - but as we're babelled to the max...
    import * as named from './app/auto.index';

    expect(named.a.data).to.equal(10);
    expect(named.b.named()).to.equal('named');

  });


});
