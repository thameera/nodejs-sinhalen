const request = require('request');
const cheerio = require('cheerio');

request('https://www.yamu.lk/', (err, res, body) => {
  const $ = cheerio.load(body);

  const print = (name, id) => {
    console.log(name);
    $(`#${id} .frontbox-header`).each((i, elem) => console.log(`  ${$(elem).text()}`));
  };

  print('Kamu', 'tab-restaurants');
  print('Bomu', 'tab-bars');
});
