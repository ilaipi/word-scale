const officeParser = require('officeparser');

const cb = (regx, handler) => (_data, err) => {
  let data = _data;
  let matched;
  let pre = 0;
  let idx = 0;
  while (matched = regx.exec(data)) {
    idx = matched.index;
    let line = data.slice(pre, idx);
    if (handler) line = handler(line);
    console.log(line);
    pre = idx;
  }
};

const handler1 = line => line.replace(new RegExp(/\s{1,}\.?．?\s{0,}/), '.');

// officeParser.parseOffice('./assets/1.docx', cb(new RegExp(/[\d]{3}\s{1,}\.?．?/, 'g'), handler1));
// officeParser.parseOffice('./assets/2.docx', cb(new RegExp(/[\d]{1,}\.?/, 'g')))
// officeParser.parseOffice('./assets/3.docx', cb(new RegExp(/[\d]{1,}\./, 'g')))
// officeParser.parseOffice('./assets/4.docx', cb(new RegExp(/[\d]{1,}\s{0,}[\.．]/, 'g')))
// officeParser.parseOffice('./assets/5.docx', cb(new RegExp(/[\d]{3}\s{1}．/, 'g'), handler1));
officeParser.parseOffice('./assets/6.docx', cb(new RegExp(/[\d]{3}\s{1,}\.?．?/, 'g'), handler1));
