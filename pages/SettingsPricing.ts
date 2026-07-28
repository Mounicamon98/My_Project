import {Page, expect} from "@playwright/test";
import { RegularPrice } from "../utils/regularprice";

export class Pricing{
    constructor(private page:Page){}
    async addpricings(price:RegularPrice){
    await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in/");
    await this.page.getByTestId("nav-settings").click();
    await this.page.getByTestId("tab-pricing").click();
    // enter regular pricings..
    await this.page.getByTestId("input-field-regular-online").fill(price.online.toString())
    await this.page.getByTestId("input-field-regular-in-clinic").fill(price.inClinic.toString())
    await this.page.getByTestId("input-field-regular-home-visit").fill(price.homeVisit.toString())
    await this.page.getByTestId("button-save").click();
    await expect(this.page.getByText("Pricing details updated successfully")).toBeVisible();
}
async updatePricings(price:RegularPrice){
    //navigate to pricings page..
    await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in/");
    await this.page.getByTestId("nav-settings").click();
    await this.page.getByTestId("tab-pricing").click();
    // update pricings save  changes
     await this.page.getByTestId("input-field-regular-online").fill(price.online.toString())
    await this.page.getByTestId("input-field-regular-in-clinic").fill(price.inClinic.toString())
    await this.page.getByTestId("input-field-regular-home-visit").fill(price.homeVisit.toString())
    await this.page.getByTestId("button-save").click();
    await expect(this.page.getByText("Pricing details updated successfully")).toBeVisible();

}
}
