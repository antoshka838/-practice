class Employee{
    constructor(name, wages){
        this.name = name;
        this.wages = wages;
    }

    annualSalary()  {
        return this.wages * 12;
    }
}

const employee = new Employee('Anton', 1200)
employee.annualSalary();

class Manager extends Employee {
    bonus = 400;

    constructor(name, wages, department){
        super(name, wages);
        this.department = department;
    }

    annualBonusSalary(){
        return super.annualSalary() + this.bonus;
    }
}

const manager1 = new Manager('Alex', 1400, 'Sales');
const manager2 = new Manager('Max', 1800, 'Marketing');

console.log('Name: ' + manager1.name + '. ' + 'Department: ' + manager1.department + '. Annual salary: ' + manager1.annualBonusSalary() + '$.');
console.log('Name: ' + manager2.name + '. ' + 'Department: ' + manager2.department + '. Annual salary: ' + manager2.annualBonusSalary() + '$.');
