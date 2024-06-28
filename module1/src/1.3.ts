// function 
// normal function
// array function
{

function add (num1 : number , num2 : number ) : number {
    return num1 + num2;
}


const addArrow = (num : number, num1 : number) : number => num+num1;


// object --> function --> method

const poorZesan = {
    name : "Zesan",
    balance : 0, 
    addBalance (balance :number) : string {
        return `New Balance is ${this.balance +balance}`
    }
}

const arr : number[] = [2,45,456,75];

const newArray : number[] = arr.map((elmt : number) : number) => elmt*elmt ;





 }