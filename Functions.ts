console.log ("Functions")

function myfunction(){
    console.log("Hello")
}

myfunction()


// function for adding two numbers

function sum(num1: number, num2: number){
    return (num1 + num2)
   }
   console.log(sum(2 , 3))
   
   
   // functions can add types of parameters and retuen types
   function sum1(num1: number, num2: number): number{
       return (num1+num2)
   }
   console.log (sum1(5,6))
   
   // Can have optional parameters by putting a question mark(?)
   //function sum2(num1: number, num2?: number): number{
     //  if(num2)
       //   return num1+num2
       //else
      //     return num1
   //}
   //console.log (sum(5)
   
   // can have any number of optional parameter, but optional parameter must be after required parameter
   
   // can have default parameter
   function sum3(num1: number, num2: number = 10): number{
    return num1+num2
 
}
console.log (sum3(35))

sum3 (8,8)
console.log(sum3(564,8952))

// Circumference of a Circle.... Always use fix value parameters at end.
function Circumference(radius: number, pie: number = 22/7, factor: number = 2)
{
    return pie*factor*radius
}
console.log(Circumference(5))



