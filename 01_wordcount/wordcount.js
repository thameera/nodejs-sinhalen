const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

// Character count
const characterLength = text.length;
console.log(`Characters: ${characterLength}`);

// Word count
const words = text.split(' ');
const wordCount = words.length;
console.log(`Words: ${wordCount}`);

// Vowel count
const vowels = text.replace(/[^aeiou]/ig, '');
const vowelCount = vowels.length;
console.log(`Vowels: ${vowelCount}`);

// Length of longest word
const wordLengths = words.map(word => word.length);
const maxLength = Math.max.apply(null, wordLengths);
console.log(`Length of longest word: ${maxLength}`);
