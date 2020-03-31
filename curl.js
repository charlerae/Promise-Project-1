const fetch = require('node-fetch');

const dash = require('dashdash');

const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type:'string',
        help: 'file in which to store the fetched content'
    }],
};
const parser = dash.createParser(options);

const opts = parser.parse(options);
const output = opts.output;
const url = opts._args[0];
console.log(output, url);

//fetching data from an API
const url2 = "https://artii.herokuapp.com/make?text=curl++this"

fetch(url2)
    .then(data => {return data.json()})
    .then(res => {console.log(res)})
    .catch(reason => {console.log("rejected because", reason)})

