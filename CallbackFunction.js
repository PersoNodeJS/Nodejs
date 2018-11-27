var maxTime = 1000;

var evenDoubler = function(v, callBack) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v % 2) {
        setTimeout(function() {
            callBack(new Error("Odd input"));
        }, waitTime);
    }
    else {
        setTimeout(function() {
            callBack(null, v * 2, waitTime);
        }, waitTime);
    }
};

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message);
    }
    else {
        console.log("the results are : " + results + " (" + time + "ms)");
    }
};

for (var i = 0; i < 10; i++) {

    evenDoubler(i, handleResults);


}

//evenDoubler(2,handleResults);
//evenDoubler(7,handleResults);
//evenDoubler(10,handleResults);

console.log("-----");
