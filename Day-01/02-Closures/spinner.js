/*
create an object "spinner"

var spinner = .....;

the spinner object should exhibit the following behavior

spinner.up(); // => 1
spinner.up(); // => 2
spinner.up(); // => 3
spinner.up(); // => 4

spinner.down(); // => 3
spinner.down(); // => 2
spinner.down(); // => 1
spinner.down(); // => 0
spinner.down(); // => -1

Important
========
The variable used to track the value should not be accessible from outside.


*/

function getSpinner(){
    var count = 0;
    var spinner =  {
        up : function(){
            return ++count;
        },
        down : function(){
            return --count;
        }
    }
    return spinner;
}

function getSpinner(){
    var count = 0;
    function up(){
        return ++count;
    }
    function down(){
        return --count;
    }
    return {
        up : up,
        down : down
    };
}
