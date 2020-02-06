
var log = {
    information: function(info) {
        var date = new Date();
        console.log(date+" Info : " + info);
    },
    fault: function(fault){
        var date = new Date();
        console.log(date+" Faul : "+ fault);
    }
}

module.exports = log