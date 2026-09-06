/**
 Union: Union allow a variable to store multiple data types like string, number using the | pipe operator

 */

 let test:string | number;

 test=10;
 test="guru";
 test=20;

 console.log(test)

 /**
  * Intersection: intersection combines two or more types into a single type using the & operator 
 */
type emp={
    name:string;
    id:number;
}

type developer={
    skills:string[];
}

type devEmp=emp&developer;

const empDetails:devEmp={
    skills:["Java","Selenium"],
    name:"Guru",
    id:1
}

console.log(empDetails)

/**
 * Literals: Literals restrict a variable to spectic value only. it improves the type safety and validation 
 */

let statusCode:"200"|"201";

statusCode="200";

console.log(statusCode);
