let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "Good evening!";

} else if (hourNow > 0 && hourNow < 10) {
    greeting = "Good morning!";

} else if (hourNow > 10) {
    greeting = "God dag!";

} else {
    greeting = "Welcome!";
}

document.write(greeting);
console.log(greeting);