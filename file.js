var fs = require('fs'); 
fs.readFile('/home/bhawana/Documents/crontab/lastDate.js', 'utf8', function(err, contents) {
    console.log(contents);
    fs.writeFileSync('/home/bhawana/Documents/crontab/Date.js',"hjjjh");

});
 