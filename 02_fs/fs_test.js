const fs = require('fs');

const getWordCount = str => str.split(' ').length;

const processFiles = filename => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Words in ${filename}: ${getWordCount(data)}`);
  });
};

const filenames = fs.readdirSync('.');
filenames.filter(f => f.endsWith('.txt')).forEach(processFiles);
