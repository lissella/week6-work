const number = prompt("Enter a number: ");
if(number >= 0){
    if(number == 0){
        console.log("You entered number 0 : " + number)
        document.getElementsById("demo").InnerHTML="You entered number : " + number;
    }
    else{
        console.log("You entered a positive number " + number);
        document.getElementsById("demo").InnerHTML="You entered a positive number : " + number;
    }
}
else{
    console.log("You entered a negative number " + number);
    document.getElementsById("demo").InnerHTML="You entered a negative number : " + number;
}