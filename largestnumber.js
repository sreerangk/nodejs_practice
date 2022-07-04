var r=require('readline-sync')

num1=r.question("enter 2 numbers ")
num2=r.question("enter second number")
a=isNaN(num1)
b=isNaN(num2)
if(a,b===true){
   console.log("please enter a number")
}

else if(num1>num2){
    console.log(num1,"is greater")

}else if (num1<num2){
    console.log(num2,"is greater")
}
else{ 
    (num1===num2)
    console.log("number is equal")
}