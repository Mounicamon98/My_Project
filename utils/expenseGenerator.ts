import { faker } from '@faker-js/faker';
export interface ExpenseData {
    expenseType :string;
    vendorName :string;
    amount :string ;
    modeOfPayment : string
    clinic : string
}
export function generateExpenseData():ExpenseData{
    return{
    expenseType :"Salary",
    vendorName :  faker.person
  .fullName()
  .replace(/[^A-Za-z. ]/g, ''),
    amount :"34343",
    modeOfPayment :"Card",
    clinic : "oha two"
    
    };
}
// updated expense data
export function generateUpdatedExpenseData():ExpenseData{
    return{
        expenseType:"Water Bill",
        vendorName: faker.person.fullName().replace(/[^A-Za-z. ]/g, ''),
        amount: "1234",
        modeOfPayment: "Cash",
        clinic: "oha two"
    }
}