// Type Alias 

type Student = {
    name : string;
    age : number;
    gender : string;
    contactNo ?: number;
    address : string;
}

const student1 : Student = {
    name : "Nishat",
    age : 25,
    gender : "Male",
    address : "Sadarpur"
}

type UserName = string;
type IsAdmin = boolean;

const userName : UserName = "Ahmed";
const isAdmin : IsAdmin = true;

type Add = (num1 : number , num2 : number) => number;
const add : Add = (num1 ,num2) => num1 + num2; 