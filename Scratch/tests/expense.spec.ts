import {test, expect} from "@playwright/test" 
import { URLs } from "../enums/URLs"
import { Expense } from "../pages/Expense"
let expense:Expense

test.only("verify select dropdown" , async ({page})=>{
   await  page.goto(URLs.EXPENSE_URL)


   expense = new Expense(page)

    await  expense.dropdown()
    await page.waitForTimeout(5000)
    await  expense.addExpense()


})
