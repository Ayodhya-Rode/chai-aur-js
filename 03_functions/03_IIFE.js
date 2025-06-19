
// To run function immediately and keep variables private, avoiding polluting the global scope.


(function Greet(){
    console.log('hello 1');
})();

(function Greet2(){
    console.log('hello 2');
})();

(()=>{
    console.log('hello 3');
})();

((user)=>{
    console.log(`Hello ${user}`);
})('Jay');