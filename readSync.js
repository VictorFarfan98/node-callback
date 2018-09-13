var fs = require('fs')
//Read file function
function readFile(){
    var buffer = fs.readFileSync("./fileTest") 
    var textPlain = buffer.toString()
    var myArray = textPlain.split("\n")
    myArray.forEach(function(value){
        console.log(value.split(" ").length);
        fs.appendFileSync('./writeTest', value.split(" ").length +'\n');
    });
    //fs.writeFileSync("./writeTest", myArray);
}

readFile()