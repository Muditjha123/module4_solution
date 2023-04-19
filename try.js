(function (window) {
   
    var greeting ="Goodbye ";
    var goodBye = function (name){
       console.log(greeting+name);
    }
    window.goodBye = goodBye;
})(window);
