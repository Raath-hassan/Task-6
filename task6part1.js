let array = [10,11,13,13,13];
let modifiedArray = [...new Set(array)];
modifiedArray.sort((a , b)=> b - a);
if(modifiedArray.length < 1){
    console.log("No second largest number")
}
else{
    console.log("Second largest number is ", modifiedArray[1]);
}