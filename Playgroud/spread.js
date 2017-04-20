function add (a, b) {
    return a + b;
}

console.log(add(3,1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Caela', 'Cory'];
var groupB = ['Charlene'];
var final = [...groupB, 3, ...groupA];


console.log(final);

var person =['Andrew', 25];
var person2 = ['Sam' , 31];

function showNames(name, age) {
    console.log('Hi ' + name + ' , you are ' + age);
}

showNames(...person);
showNames(...person2);

// Hi Bob

var names = ['Mike', 'Bill'];
var final = ['Bob', ...names];

final.forEach(function (name) {
    console.log('Hi ', name);
});