var fizzBuzz = Number(prompt(" Input  your number"))
if(fizzBuzz%3==0 && fizzBuzz%5==0){
    alert("Fizz Buzz")
}else if (fizzBuzz%5==0){
    alert("Buzz")
}else if (fizzBuzz%3==0){
    alert("Fizz")
}else{
    alert("INVALID")
}