// Part 1: Variables, Data Types, Operators, and Conditionals

let userName = prompt("Enter your name:");
let age = prompt("Enter your age:");
age = Number(age);  // Convert to number

if (age >= 18) {
    console.log(`${userName}, you are eligible to vote.`);
} else {
    console.log(`${userName}, you are not eligible to vote yet.`);
}


// Part 2: Functions

// Function to calculate the total price including tax
function calculateTotal(price, taxRate) {
    let total = price + (price * taxRate);
    return total;
}

// Call the function
let price = 100;
let taxRate = 0.15;
console.log("Total with tax: $" + calculateTotal(price, taxRate));


// Part 3: Loops

// Loop to log numbers from 1 to 5 using for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop through an array of names using forEach
let names = ['John', 'Alice', 'Bob'];
names.forEach(function(name) {
    console.log(name);
});

// Part 4: DOM Manipulation

// Select an element by ID and change its content
document.getElementById("welcome").innerHTML = "Welcome to JavaScript Fundamentals!";

// Select an element and toggle its class
let button = document.querySelector("button");
button.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Dynamically create and append a new element
let newDiv = document.createElement("div");
newDiv.innerHTML = "Just added a new div!";
document.body.appendChild(newDiv);

