import {test as setup} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

setup("Authenticate", async({page})=>{
const loginPage = new LoginPage(page)
await loginPage.goto();
await loginPage.loginWithEmail("mounicaone@gmail.com")
await loginPage.clickContinue();
await page.waitForURL("https://auth-uat-v2.onetechsolution.co.in/login/initiate-otp?client_id=175b5663-ffba-4405-8291-05e4a7d7443e&redirect_uri=https://doctor-uat-v2.onetechsolution.co.in/auth/callback")
await loginPage.enterOTP("2121")
await loginPage.clickContinue();
await page.waitForURL("https://doctor-uat-v2.onetechsolution.co.in/en")

// store cookies
await page.context().storageState({
    path:"playwright/.auth/user.json",
})
})