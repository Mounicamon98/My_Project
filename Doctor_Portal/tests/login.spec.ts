import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe.serial('Login Tests', () => {
    let loginPage:LoginPage;
    const Otp="1221";
  
    test.beforeEach(async ({page})=>{
     
        loginPage = new LoginPage(page);
          await loginPage.navigate();
          
        
    })
    test('Login using phone number', async ({ page }) => {
       
        await loginPage.loginwithPhone("9898989898");
        await loginPage.enterOtp(Otp)
        await page.waitForTimeout(5000)
        
        // Add validation based on next screen (OTP / dashboard)
        //await expect(page).toHaveURL("https://auth-uat-v2.onetechsolution.co.in/login/initiate-otp?client_id=175b5663-ffba-4405-8291-05e4a7d7443e&redirect_uri=https://doctor-uat-v2.onetechsolution.co.in/auth/callback");
    });

    test('Login using email', async ({ page }) => {
        
        await loginPage.loginwithEmail("mounicaone@gmail.com");
        await loginPage.enterOtp(Otp)
         await page.waitForTimeout(5000)
        // Validation
       // await expect(page).toHaveURL("https://auth-uat-v2.onetechsolution.co.in/login/initiate-otp?client_id=175b5663-ffba-4405-8291-05e4a7d7443e&redirect_uri=https://doctor-uat-v2.onetechsolution.co.in/auth/callback");
  });

});