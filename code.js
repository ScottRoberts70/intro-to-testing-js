// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }
const helloWorld = function() {
    return "Hello, World!";
}
//plusOne
function plusOne(num) {
    if (typeof num ==='number'){
        return num + 1;
    }
    return 0;
}
//Exercise #1.... so on...
function sayHello(input){
    if(input == undefined || (input === true) || (input === false)){
        return 'Hello, World!';
    }else {
        return "Hello, " + input + "!";
    }
   // if (input === 'Alex'){
   //     return 'Hello, Alex!';
   // }
   // else if (input === 'Jane'){
   //      return 'Hello, Jane!';
   // }else{
   //      return 'Hello, Pat!';
   //  }
}

