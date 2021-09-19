var https = require('https');
var parameters = process.argv.slice(2);
var allowedParameter = ['B-INCOMESSF', 'BM70SSF', 'BEQSSF', 'B-FUTURESSF'];

var result = '';
var position = -1;
var req = https.request({
    hostname: 'codequiz.azurewebsites.net',
    port: 443,
    path: '',
    method: 'GET',
    headers: {'Cookie': 'hasCookie=true'}
}, (res) => {
    res.on('data', function (chunk) {
        result = result + chunk;
        position = result.search(parameters);
        if (position === -1) {
            console.log('Data not found');
            process.exit(1);
        }

        position += parameters[0].length;
        console.log(result.substring(position, position + 22).replace(
            /[ <>\/a-z]/g, ''
        ));
    }); 
    res.on('end', function () {}); 
})

if (allowedParameter.includes(parameters[0])) {
    req.on('error', error => {
        console.error(error);
    })
    req.end();
} else if (parameters[0] === undefined) {
    console.log('Input is empty');
    process.exit(1);
} else {
    console.log('Input not match');
    process.exit(1);
}