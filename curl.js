const fetch = require('node-fetch');
const dash = require('dashdash');
const fs = require('fs').promises;


//Parsing command-line arguments
//setting headers
const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type:'string',
        help: 'file in which to store the fetched content'
    }, 
    {
        names: ['header', 'H'],
        type: 'string',
        help: 'setting arbitrary header'
    },
    {
        names: ['User-Agent', 'A'],
        type: 'string',
        help: 'lets servers and network peers identify the application'
    },
    {
        names: ['Referer', 'e'],
        type: 'string',
        help: 'contains the address of the previous web page from whcih a link to the currently requested page was followed'
    },
    {
        names: ['dump-header'],
        type: 'string',
        help: 'contains the address of the previous web page from whcih a link to the currently requested page was followed'
    },
    {
        names: ['data', 'd'],
        type: 'string',
        help: 'should become the body of the HTTP request'
    },
    {
        names: ['Xmethod', 'X'],
        type: 'string',
        help: 'Overriding the method of the request'
    },
    {
        names: ['help', 'h'],
        type: 'string',
        help: 'HELP ME!'
    }],
};
const parser = dash.createParser(options);

const opts = parser.parse(options);
const output = opts.output;
const url = opts._args[0];
console.log(output, url);


//Just getting a URL
const url2 = 'https://artii.herokuapp.com/make?text=alyssa++charle++project&font=puffy';
fetch(url2)
    .then(res => res.text())
    .then(data => {
        // console.log(data);
        //Now, put it in a file 
        fs.writeFile(output, data, 'utf8').then(() => {
            console.log("write successful");
        }).catch(err => {
            console.error(err);
        });
    })
    .catch((reason) => {
        console.log('rejected because', reason);
    })


//Capturing response headers
const dump_header = opts.dump_header;
const url3 = opts._args[0];
fetch(url3)
    .then(res => {
        // console.log(res.headers)
        // console.log("---------------------")
        // console.log(res)
        let variable = `HTTP/1.1 ${res.status} ${res.statusText}\n ` 
        res.headers.forEach((key, val) => {
            const variable2 = (`${val}: ${key}\n`)
            variable += variable2
        })
        // console.log(variable);
        fs.writeFile(dump_header, variable, (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    .catch((reason) => {
        console.log('rejected because', reason);
    })



// Overriding the method of the request
const Xmethod = opts.Xmethod
const url4 = opts._args[0];
fetch(url4)
    .then(res => {
        let variable3 = opts.data
    fs.writeFile(Xmethod, variable3, 'utf8').then(() => {
        console.log("write successful");
    }).catch(err => {
        console.error(err);
    });
    })
    .catch((reason) => {
        console.log('rejected because', reason);
    })


//Showing a "help" message
console.log(parser.help());


