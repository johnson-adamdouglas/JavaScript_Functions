console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 1){
        return null;
    }
    for (let num = 1; num < count; num++){
        if (num % 2 != 0){
            console.log(num);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    var aboveSixteen = "Congrats ${userName}, you can drive!";
    var belowSixteen = "Sorry ${userName}, but you need to wait until you're 16.";
    if (age < 16){
        console.log(belowSixteen)
    }
    else{
        console.log(aboveSixteen)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function locatesPoint(x, y){
    if (x == 0){
        console.log("Lies on the Y axis");
    }
    else if (y == 0){
        console.log("Lies on the X axis");
    }
    else if (x > 0 && y > 0){
        console.log("Lies in quadrant 1");
    }
    else if (x < 0 && y > 0){
        console.log("Lies in quadrant 2");
    }
    else if (x < 0 && y < 0){
        console.log("Lies in quadrant 3");
    }
    else{
        console.log("Lies in quadrant 4");
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function TrianbleType(a, b, c){
    if ((a + b) <= c){
        console.log("This is not a valid triangle")
    }
    if (a == b && b == c){
        console.log("This is an equalateral triangle")
    }
    if (a == b && b == c && c != a){
        console.log("This is an isosceles triangle")
    }
    if (a != b && b != c && c != a){
        console.log("This is a scalene triangle")
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function planUsage(planLimit, day, usage){
    var daysRemaining = 30 - day;
    console.log("${day} days used, ${daysremaining} days remaining");
    console.log("Your allotted usage is ${planLimit / 30} GB/day");
    if ((usage / day) > (planLimit / 30)){
        console.log("You are EXCEEDING your daily limit");
    }
    var dataLeft = planLimit - usage;
    console.log("You have ${dataLeft} GB left. You can use ${dataLeft / daysRemaining} GB/day");
}