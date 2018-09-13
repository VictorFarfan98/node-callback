var fs = require('fs')
//Read file function
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString()
    console.log(textPlain)

    var myArray = textPlain.split("\n")
    myArray.forEach(function(value){
        //console.log(value.split(" ").length);
        fs.appendFileSync('./writeTest', value.split(" ").length +'\n');
    });
};
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )   
}


readFile()