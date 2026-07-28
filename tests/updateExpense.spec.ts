import {test, expect} from "@playwright/test"
import { Expense} from "../pages/Expense"
import { generateExpenseData, generateUpdatedExpenseData } from "../utils/expenseGenerator"
test("update Expense", async({page})=>{
const expense = new Expense(page);
//Generate test data
const oldData = generateExpenseData();
const updatedData = generateUpdatedExpenseData();
// Add expense
await expense.addExpense(
    oldData.expenseType,
    oldData.vendorName,
    oldData.amount,
    oldData.modeOfPayment,
    oldData.clinic
);
//verify expense created
await expect(page.getByText(oldData.vendorName)).toBeVisible();
//update Expense..
await expense.updateExpense(
    oldData.vendorName,
    updatedData.expenseType,
    updatedData.vendorName,
    updatedData.amount,
    updatedData.modeOfPayment,
    updatedData.clinic
)
//Seacrch using the uppdated vendor name..
await page.getByPlaceholder("Search...").fill(updatedData.vendorName);
//verify updated expense
await expect(page.getByText(updatedData.vendorName)).toBeVisible();
})