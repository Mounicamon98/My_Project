import {test, expect }from "@playwright/test"
import { Expense } from "../pages/Expense"
import { generateExpenseData } from "../utils/expenseGenerator";

test("Add Expense", async ({page})=>{
const expense = new Expense(page);
//Generate test data 
const data = generateExpenseData();
//create Expense
await expense.addExpense(
    data.expenseType,
    data.vendorName,
    data.amount,
    data.modeOfPayment,
    data.clinic
);
// verify created data
await expect(page.getByText(data.vendorName)).toBeVisible();
})




