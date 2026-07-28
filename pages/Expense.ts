import {Page, expect} from "@playwright/test"

export class Expense{
    constructor(private page:Page){}
    async addExpense(
        expenseType:string,
        vendorname:string,
        amount:string,
        modeofpayment:string,
        clinic:string)
    {
        const drawer = this.page.getByTestId("form-drawer");
        await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in/en/dashboard")
        await this.page.getByTestId("nav-expenses").click();
        await this.page.getByTestId("button-add-expense").click()
        // Wait for drawer to open
        await drawer.waitFor();
        await drawer.getByTestId("dropdown-expense-type").click()
        await this.page.getByRole("option",{name:expenseType}).click()
        await this.page.getByTestId("input-field-vendor-staff-name").fill(vendorname);
        await this.page.getByTestId("input-field-amount-(inr)").fill(amount)
         await this.page.getByTestId("dropdown-mode-of-payment").click();
        await this.page.getByRole("option",{name:modeofpayment}).click()
        await drawer.getByTestId("dropdown-clinic").click();
        await this.page.getByRole("option",{name:clinic}).click()
        await drawer.getByTestId("button-save").click();
        await this.page.waitForLoadState("networkidle");
    }
    async deleteExpense(vendorName:string){
        // search expense
        await this.page.getByPlaceholder("Search...").fill(vendorName)
        const row = this.page.locator("tr").filter({
        has: this.page.getByText(vendorName)});
        await expect(row).toBeVisible();
        // click delete button
        await row.getByTestId("button-delete").click();
        //confirm delete button 
        await this.page.getByTestId("dialog-button-confirm").click();
    }
    async updateExpense(
        oldvendorName: string,
        expenseType: string,
        vendorName: string,
        amount: string,
        modeOfPayment: string,
        clinic: string
    ){
        const drawer = this.page.getByTestId("form-drawer");
        // search for an existing expense
        await this.page.getByPlaceholder("Search...").fill(oldvendorName);
        const row = this.page.locator("tr").filter({has: this.page.getByText(oldvendorName)})
        await expect(row).toBeVisible();
        
        // click edit button ..
        await row.getByTestId("button-edit").click();
        await drawer.waitFor();
        await this.page.getByTestId("button-edit").click();
        //update expense type...
        await drawer.getByTestId("dropdown-expense-type").click();
        await this.page.getByRole("option",{name:expenseType}).click();
        //vendor name
        await drawer.getByTestId("input-field-vendor-staff-name").fill(vendorName);
        // update amount..
        await drawer.getByTestId("input-field-amount-(inr)").fill(amount)
        //mode of payment..
        await drawer.getByTestId("dropdown-mode-of-payment").click();
        await this.page.getByRole("option",{name:modeOfPayment}).click();

        // clinic..
        await drawer.getByTestId("dropdown-clinic").click();
        await this.page.getByRole("option",{name:clinic}).click()

        // click on save changes..
        await drawer.getByTestId("button-save").click()
        await this.page.waitForLoadState("networkidle")
    

    }
}