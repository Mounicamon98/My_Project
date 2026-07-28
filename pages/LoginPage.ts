import  {Page } from "@playwright/test"
export class LoginPage{
    constructor(private page:Page){}
    async goto(){
    await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in")
    }
    async loginWithPhone(phone:string){
    await this.page.fill("#phone_input", phone)
  

    }
    async loginWithEmail(email:string){
    await this.page.fill("#email", email)
    
    }
    async clickContinue(){
    await this.page.click("#submitBtn")
    }
    async enterOTP(otp:string){
    for(let i=0; i<otp.length;i++){
        await this.page.locator(".otp-input").nth(i).fill(otp[i]);
    }
    }
}
