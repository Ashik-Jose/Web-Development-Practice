// Day 6 Regular Expression 3

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();  
});


function readLine() {
    return inputString[currentLine++];
}


function regExp3()
{
    var re = /\d+/g;
     return re
}

function main()
    {

var s = readLine();
var re = regExp3();
var r = s.match(re);
for( const e of r)
{
    console.log(e);
}

}
