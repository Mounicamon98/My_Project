import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboard } from "../pages/Dashboard"
import { Upload } from "../pages/Upload"
import { URLs } from "../enums/URLs"
test.describe("Doctor portal login module",()=>
{
  let loginPage: LoginPage;
  let dashboard: Dashboard;
  let uploadFile: Upload

    test.beforeEach(async ({ page }) =>
    {
        // Navigate to Application
        await page.goto(URLs.LOGIN_URL);

        // Initialize Login Page
        loginPage = new LoginPage(page);
        dashboard = new Dashboard(page)
       
    });

    test("Verify user is able to login successfully",
        async ({ page }) =>
    {
        // Perform Login
        await loginPage.loginEmail("mounicaone@gmail.com");
        //Assertion 1 //verify continue button is visible
        await expect(page.locator('#submitBtn')).toBeVisible();

        await dashboard.enterOtp("2121");
        //await expect(page.locator('#submitBtn')).toBeEnabled();

     
        
    // Verify URL after login
        await expect(page).toHaveURL("https://doctor-uat-v2.onetechsolution.co.in/en");
//Save storage state
       await  page.context().storageState({path:'set_up/authentication.json'})
    
      })
       
    })
