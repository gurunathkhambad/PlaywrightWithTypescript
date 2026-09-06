/*
const str:string="guru";
let reverse:string="";
for(let i:number=str.length-1; i>=0; i--)
{
    reverse+=str.at(i);
}
console.log(reverse);
*/

// Find a factorial number 
/*
const no:number=5;
let factorial=1;
//factorial=1*2*3*4*5
for(let i:number=1; i<=no; i++)
{
    factorial=factorial*i;
}

console.log(factorial);
*/

//Given string is palindrom or not 

/*
const str:string="madam";
let reverse:string="";
for(let i:number=str.length-1; i>=0; i--)
{
    reverse+=str.at(i);
}

if(str===reverse)
{
    console.log("Given string is a palindrom");
}else
{
    console.log("Given string is not a palindrom");
}
*/
// Fibonacci series
/*
const no:number=10;
let firstNo:number=0, secondNo:number=1;
console.log(firstNo);
console.log(secondNo);
for(let i=2; i<=no; i++)
{
    let next:number=firstNo+secondNo;
    console.log(next);
    firstNo=secondNo;
    secondNo=next;
}
*/
// Find the max and min value from the array
/*
const no:number[]=[34,432,55,24,43];
let min:number=no[0], max:number=no[0];

for(let n of no)
{
    if(n>max) 
        {max=n;
        }
    if(n<min)
    {
        min=n;
    }
}
console.log(max);
console.log(min);
*/
// Program to check the number is prime number or not 

/*
const no:number=12;
let flag=true;
for(let i:number=2; i<=no/2; i++)
{
    if(no%i==0)
    {
      flag=false;
        break;
    }
}
if(flag)
{
console.log("Given number is a prime number");
}else
{
 console.log("Given number is not a prime number");   
}
*/

/*
// wtite a program to second largest number from the array 

let no:number[]=[24,312,34,6,73,22,88,90,3445,242,42,5,3];

let firstNumberLN:number=-Infinity;
let secondNumberLN:number=-Infinity;

for(let n of no)
{
    if(n>firstNumberLN)
    {
        secondNumberLN=firstNumberLN;
        firstNumberLN=n;
    }else if(n>secondNumberLN && n!=firstNumberLN)
    {
        secondNumberLN=n;
    }
}

console.log("First largest number",firstNumberLN);
console.log("Second largest number",secondNumberLN);
*/

/*
// wtite a program to third largest number from the array 

let no:number[]=[24,312,34,6,73,22,88,90,3445,242,42,5,3];

let firstLN:number=-Infinity;
let secondLN:number=-Infinity;
let thirdLN:number=-Infinity;

for(let n of no)
{
    if(n>firstLN)
    {
        thirdLN=secondLN
        secondLN=firstLN;
        firstLN=n;
    }else if(n>secondLN && n!=firstLN)
    {
        secondLN=n;
    }else if(n>thirdLN && n!=secondLN && n!=firstLN)
    {
        thirdLN=n;
    }
}

console.log("First largest number",firstLN);
console.log("Second largest number",secondLN);
console.log("Third largest number", thirdLN);
*/

// Write a progrma to check occurances of each characters

let str:string='sdssjndljljndhaddfnweinojndcj';
let ch:string[]=str.split("");

let map=new Map<string, number>();

for(let char of ch)
{
    if(map.has(char))
    {
        map.set(char,map.get(char)!+1);
    }else{
        map.set(char,1);
    }
}
console.log(map.values);


