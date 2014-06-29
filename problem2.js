//Finds the sum of the even-valued terms of a fibonacci sequence up to 4 million

var sum = 0;
var fibonacci= [1,2];
first = fibonacci[fibonacci.length - 2];
second = fibonacci[fibonacci.length - 1];

while (first + second < 4000000){
    fibonacci.push(first + second);
    first = fibonacci[fibonacci.length - 2];
    second = fibonacci[fibonacci.length - 1];
}

for (var i = 0; i < fibonacci.length; i++) {
    if(fibonacci[i] % 2 === 0){
        sum += fibonacci[i];
    }
}
console.log(sum);
