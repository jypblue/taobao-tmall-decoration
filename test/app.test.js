/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-18 14:55:11
 * @version $Id$
 */

const {
  expect
} = require('chai');
const app = require('../index.js');

describe('app', () => {
  it('should input a fold path', () => {
    expect(app.transformStyle('./tmpl', './dist')).to.be.true;
    expect(app.transformStyle('tmpl', 'dist')).to.be.true;
  })
})
