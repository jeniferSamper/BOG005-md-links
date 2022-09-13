const mdLinks = require('./index.js');
console.log("false",mdLinks('C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md', {validate : false}));
console.log("true",mdLinks('C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md', {validate : true}));
