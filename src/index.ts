export = {}

// let score = 0;
// let age:number;

// let name = 'Uzair';

// let numbers:number[] = [1,2,3,4,5];

// let Mixed = [1, "2"]

function calculateTax(amount:number, year = 2022):number {
    if(year === 2022) {
        return amount * 0.1;
    }
    return amount * 0.2;
}

calculateTax(100, 2022);

type Employee = {
readonly id:number,
name:string,
age:number,
retire:(date: Date) => void
}

let employee:Employee = {
    id: 1,
    name: 'Uzair',
    age: 22,
    retire: (date: Date) => {
        console.log(date);
    }
}