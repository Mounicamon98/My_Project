import { Page , expect} from "@playwright/test";
export class Dashboard
{
    constructor(private page:Page){}
    continueBtn='#submitBtn'
    async enterOtp(otp:string){
        const digits=otp.split('')
        for(let i=0;i<digits.length;i++){
          await this.page.locator('.otp-input').nth(i).fill(digits[i]);
        }
         await expect(this.page.locator(this.continueBtn)).toBeEnabled();
        await this.page.click(this.continueBtn) 
    }

}