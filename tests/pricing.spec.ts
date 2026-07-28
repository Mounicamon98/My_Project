import {test, expect} from "@playwright/test"
import { Pricing } from "../pages/SettingsPricing"
import { generateregularPrice } from "../utils/regularprice"

test("move to settings and update regular pricings", async({page})=>{
    const pricing = new Pricing(page)
    const regprice = generateregularPrice();
    await pricing.addpricings(regprice); 

    // Verify Settings page is open
    await expect(page.getByTestId("tab-pricing")).toBeVisible();

    // Verify entered values
    await expect(
        page.getByTestId("input-field-regular-online")
    ).toHaveValue(regprice.online.toString());

    await expect(
        page.getByTestId("input-field-regular-in-clinic")
    ).toHaveValue(regprice.inClinic.toString());

    await expect(
        page.getByTestId("input-field-regular-home-visit")
    ).toHaveValue(regprice.homeVisit.toString());
})