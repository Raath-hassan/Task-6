let  array = [10,13,17,6,8];
let largestNumber = Math.max(...array);
let secondLaregest = -Infinity;
for(let arrayNumber of array){
    if(arrayNumber !== largestNumber && arrayNumber > secondLaregest){
        secondLaregest = arrayNumber;
    }
}
if(secondLaregest === -Infinity){
    console.log("No second largest number ");
}
else{
    console.log("Second largest number is" , secondLaregest);
}
