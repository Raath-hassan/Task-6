let array = [10, 18, 15, 3];

let largestNumber = -Infinity;
let secondLargest = -Infinity;

for (let arrayNumber of array) {

    if (arrayNumber > largestNumber) {
        secondLargest = largestNumber;
        largestNumber = arrayNumber;
    }

    else if (arrayNumber > secondLargest && arrayNumber !== largestNumber) {
        secondLargest = arrayNumber;
    }
}

if (secondLargest === -Infinity) {
    console.log("No second largest");
} else {
    console.log("Second largest number is", secondLargest);
}