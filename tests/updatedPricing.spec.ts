import {test} from "@playwright/test"
import { Pricing } from "../pages/SettingsPricing"
import { Appointment } from "../pages/Appointment"
import { generateregularPrice } from "../utils/regularprice"

test("Verify the updated pricing is reflected in the appointmet booking", async({page})=>{
    const pricing = new Pricing(page);
    const appointment = new Appointment(page);
    const regprice = generateregularPrice();
    // update pricing..
    await pricing.addpricings(regprice);

    //open appointment 
    await appointment.BookAppointment();

    // verify prices 
    await appointment.verifyRegularPrices(
        regprice.online,
        regprice.inClinic,
        regprice.homeVisit
    )
})