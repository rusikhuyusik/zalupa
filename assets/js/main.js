/**
 * Created by asus on 13.12.2014.
 */
var myObject = (function(){ // Замы
    var value = 0;
    return {
        increment: function(inc) {
            value += inc;
        },
        getValue: function() {
            return value;
        }
    }
}());

var quo = function(status) {
    return {
        get_status: function() {
            return status;
        }
    }
};

var quo1 = quo("pizda"),
    quo2 = quo("djigoorda");

var fade = function(node) { //замыкание
    var level = 1,
        step = function() {
            var hex = level.toString(16);
            node.style.backgroundColor = '#FFFF' + hex + hex;
            if (level < 15) {
                level += 1;
                setTimeout(step, 100);
            }
        };
    setTimeout(step,100);
};

$("#fade").click(function(){
    fade(document.body);
});