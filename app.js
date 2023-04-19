(function () {

    var names = ["Yaakov", "John", "Jason", "Paul", "Frank","jack", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        goodBye(names[i]);
      }
      else {
        hello(names[i]);
      }
    }
    
    })();