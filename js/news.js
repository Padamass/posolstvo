var fs = require('fs');
var json = fs.readFileSysn('js/news.json', 'utf8');
var jsObject = JSON.parse(json);
console.log(jsObject);