import { Page, Locator} from "@playwright/test"
 export class LoginPage{
    readonly page:Page;
    readonly phoneInput: Locator;
    readonly emailInput: Locator;
    readonly continueBtn: Locator; 

    constructor(page:Page) {
        this.page=page;
        this.phoneInput=page.locator("#phone_input")
        this.emailInput=page.locator("#email")
        this.continueBtn=page.locator("#submitBtn")
    }
    async navigate(){
        await this.page.goto("https://doctor-uat-v2.onetechsolution.co.in/")
    }
    async loginwithPhone(phone:string){
        await this.phoneInput.fill(phone);
        await this.continueBtn.click();

    }
    async loginwithEmail(email:string){
        await this.emailInput.fill(email)
        await this.continueBtn.click();
    }
    async enterOtp(otp:string){
        const digits=otp.split('')
        for(let i=0;i<digits.length;i++){
          await this.page.locator('.otp-input').nth(i).fill(digits[i]);
        }
    }
  


}