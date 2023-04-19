(function (window) {
   
    var greeting ="Hello ";
    var hello = function (name){
       console.log(greeting+name);
    }
    window.hello = hello;
})(window);
