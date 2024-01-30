function delayedGreeting(name, callback) {
    setTimeout(function() {
      callback("Hello, " + name);
    }, 1000);
  }
  
  delayedGreeting("Alice", function(message) {
    console.log(message); // Output: Hello, Alice
  });