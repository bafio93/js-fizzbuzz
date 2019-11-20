//Creation of the list: we'll use a list of n numbers (in this case n = 100).
var n = 100;
for (var i = 1; i <= n; i++) {
    if (i%15 == 0) {
        console.log("FizzBuzz");
    }
    else if (i%5 == 0) {
        console.log("Buzz");
    }
    else if (i%3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}
