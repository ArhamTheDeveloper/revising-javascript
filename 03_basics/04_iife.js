// Immidiately Invoked Function Expressions (IIFE)
// Do not forget to add ; after IIFE and also to the code before it.
let me = "arham";

(function chai() {
  console.log("I am named IIFE");
  console.log(me);
})();

(() => {
  console.log("I am anonymous / unnamed IIFE");
})();

// Understanding IIFE usage : https://chat.deepseek.com/a/chat/s/ffe7dd78-c6ca-4700-b288-0888b4276f1b
