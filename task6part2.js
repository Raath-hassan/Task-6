let  array = [10,13,17,6,8];
let largestNumber = Math.max(...array);
let secondLaregest = -Infinity;
for(let modifiedArray of array){
    if(modifiedArray !== largestNumber && modifiedArray > secondLaregest){
        secondLaregest = modifiedArray;
    }
}
if(secondLaregest === -Infinity){
    console.log("No second largest number ");
}
else{
    console.log("Second largest number is" , secondLaregest);
}
