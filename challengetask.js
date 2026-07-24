let array = [10,13,9,13,20];
let modifiedArray = [...new Set(array)];
modifiedArray.sort((a , b)=> b - a);
if(modifiedArray.length<2){
    console.log("No third largest number")
}
else{
    console.log("Third largest number is ",modifiedArray[2] );
}