function fizzBuzz(input) {
  if (typeof input === "number" && Number.isFinite(input)) {
    let number = 1;
    while (number <= input) {
      if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
      } else if (number % 3 == 0) {
        console.log("Fizz");
      } else if (number % 5 == 0) {
        console.log("Buzz");
      } else {
        console.log(number);
      }
      number++;
    }
  } else {
    console.log("give a number");
  }
}

fizzBuzz(20);
