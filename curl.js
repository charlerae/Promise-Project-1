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
console.log('Options are:', opts);