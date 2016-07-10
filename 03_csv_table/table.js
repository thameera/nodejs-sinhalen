const Table = require('cli-table');
const fs = require('fs');

const showTable = data => {
  const table = new Table({
    head: ['Country', 'Population']
  });

  data.forEach(item => table.push(item));

  console.log(table.toString());
};

fs.readFile('population.csv', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error occurred: ${err}`);
    return;
  }

  const lines = data.split('\n').filter(line => !!line);
  const dataForTable = lines.map(line => line.split(','));
  showTable(dataForTable);
});
