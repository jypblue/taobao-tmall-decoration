/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-18 14:55:11
 * @version $Id$
 */

const fs = require('fs');
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
var app = require('../index.js');

var tmplDir = path.resolve(__dirname, '../example/tmpl/');
var distDir = path.resolve(__dirname, '../example/dist/');

describe('style transform test', function() {

  it('path should be a string', function() {
    expect(tmplDir).to.be.a('string');
    expect(distDir).to.be.a('string');
  });

  it('start path should exists', function() {
    let flagt = fs.existsSync(tmplDir);
    expect(flagt).to.be.true;
  });
});
