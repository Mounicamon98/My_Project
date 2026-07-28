import {test, expect} from "@playwright/test"
import { Expense } from "../pages/Expense"
import { generateExpenseData } from "../utils/expenseGenerator"

test("Delete Expense", async({page})=>{
const expense = new Expense(page);
const data = generateExpenseData();
// create expense 
await expense.addExpense(
data.expenseType,
data.vendorName,
data.amount,
data.modeOfPayment,
data.clinic
)
// verify created 
await expect(page.getByText(data.vendorName)).toBeVisible();
// Delete Expense
await expense.deleteExpense(data.vendorName);

//verify deleted
await expect(page.getByText(data.vendorName)).not.toBeVisible();
})