/*
 * @Author: jachin
 * @Date:   2016-08-16 16:38:04
 * @Last Modified by:   jachin
 * @Last Modified time: 2016-08-16 18:35:43
 */

'use strict';
let path = require('path');
let fs = require('fs');
let glob = require('glob');
let css = require('css');
let colors = require('colors');
let cheerio = require('cheerio');

module.exports = {

  transformStyle: function(tmplDir, distDir) {

    //如果没有dist目录，新建一个dist目录
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir);
    }

    //读取tmpl下所有的html
    let entryHtml = glob.sync(tmplDir + '/*.html');

    //循环读取
    entryHtml.forEach((filePath) => {
      let fileType = filePath.slice(filePath.lastIndexOf('.') + 1);
      if (['html', 'htm'].indexOf(fileType) == -1) {
        // statement
        return false;
      }

      fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
          // statement
          throw err;
          console.log(fliePath + ' file read faild...'.red);
        }
        let $ = cheerio.load(data, {
          decodeEntities: false
        });
        let stylesheets = [],
          styleObj = {};
        let links = $('link');

        links.each(function(k, v) {
          let href = $(v).attr("href");

          href = path.resolve(filePath, "../../" + href);

          let hrefType = href.slice(href.lastIndexOf('.') + 1);

          if (['css'].indexOf(hrefType) == -1) {
            // statement
            return false;
          }
          stylesheets = stylesheets.concat(parseStyleSheet(href));
        });

        stylesheets.forEach(function(v, k) {
          Object.keys(v).forEach(function(v1, k1) {
            if (v1 in styleObj) {
              // statement
              styleObj[v1] += v[v1];
            } else {
              styleObj[v1] = v[v1];
            }
          });
        });

        for (let key in styleObj) {
          // console.log(key);
          $(key).each(function(k, v) {
            let oldStyle = $(v).attr("style");
            oldStyle = oldStyle == null ? "" : oldStyle;
            $(v).attr("style", oldStyle + styleObj[key]);
          });
        }

        let filename = filePath.slice(filePath.lastIndexOf('\/'));
        fs.open(distDir + filename, "w+", function(err, fd) {
          fs.writeFile(fd, $.html(), function(err) {
            if (err) {
              // statement
              throw err;
              console.log(filename + "write faild...".red);
            }
            fs.close(fd);
            console.log(filePath + " done...".green);
          });
        });
      });
    });


    function parseStyleSheet(path) {
      let maps = [],
        ast, rules;
      let content = fs.readFileSync(path);
      ast = css.parse("" + content);
      rules = ast.stylesheet.rules;

      for (let i = 0, len = rules.length; i < len; i++) {
        let item = rules[i],
          selector, decls;

        if (item.type == 'rule') {
          // statement
          selector = item.selectors;
          decls = item.declarations;
          let styles = decls.map ? decls.map(function(v, k) {
            return v.property + ":" + v.value + ";";
          }) : '';

          let tmp = {};
          tmp[selector] = styles.join("");
          maps.push(tmp);
        }
      }
      return maps;
    }


  }


}
