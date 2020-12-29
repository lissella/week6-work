const password ='p@ssword'
console.log(password.length); //8

if(password.length>=8 && password.includes('@')){
    let x = password.length;
    console.log("that password is long enough");
    document.getElementsById("demo").innerHTML="That password is long enough" + x;
}
else if(password.length>=8 && password.includes('@')){
    let x = password.length;
    console.log("that password is strong + x enough");
    document.getElementsById("demo").innerHTML="That password is strong enough" + x;
}