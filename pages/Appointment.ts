import {Page, expect} from "@playwright/test"
export class Appointment{
    constructor(private page:Page){}
    async BookAppointment(){
        await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in/");
        await this.page.getByTestId("nav-appointments").click();
        await this.page.getByTestId("button-add-appointment").click();
        await this.page.getByTestId("dropdown-clinic").click();
        await this.page.getByRole("option",{name:"oha onesd"}).click();
    }
    async verifyRegularPrices(
        online:number,
        inClinic:number,
        homeVisit:number
    ){
        await expect(this.page.getByText(`₹${online}`).first()).toBeVisible()
        await expect(this.page.getByText(`₹${online}`).first()).toBeVisible()
        await expect(this.page.getByText(`₹${online}`).first()).toBeVisible()
    }
}
