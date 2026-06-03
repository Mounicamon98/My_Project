import {test,expect,Page, Locator} from "@playwright/test"
import { URLs } from "../enums/URLs"
export class Expense
{
    readonly clinic_dropdown:Locator
    readonly addExpenseBtn: Locator
    readonly expensetype: Locator
    readonly expensedate:Locator
    readonly vendorname:Locator
    readonly amount:Locator
    readonly modeofpayment:Locator
    readonly save:Locator
    constructor( private page:Page) {
    this.clinic_dropdown =  page.getByTestId('dropdown-clinic')
    this.addExpenseBtn =    page.getByTestId('button-add-expense')
    this.expensetype = page.getByTestId('dropdown-expense-type')
    this.expensedate= page.getByTestId('button-date')
    this.vendorname= page.getByTestId('input-field-vendor-staff-name')
    this.amount = page.getByTestId('input-field-amount-(inr)')
    this.modeofpayment = page.getByTestId('dropdown-mode-of-payment')
    this.save= page.getByTestId('button-save')

    }
     async dropdown()
     {
        
         await this.clinic_dropdown.click()
         await this.page.getByRole("option", { name: "oha two" }).click()
       
     }
     async addExpense()
     {
        await this.addExpenseBtn.click()
        await this.expensetype.click();
       await this.page.getByRole("option", {name: "Salary"}).click()

        //await this.expensedate.click();
        
        //await this.page.getByRole('gridcell',{name:'27'}).click()
        await this.vendorname.fill("Mounica");
        await this.amount.fill("200")
        await this.modeofpayment.click()
        await this.page.getByRole("option", {name:"Card"}).click()
        //await this.clinic_dropdown.click()
        //await this.page.getByRole("option", {name:"oha two"}).click()
        await this.page.waitForTimeout(5000)
        await this.save.click()

        
     }

}