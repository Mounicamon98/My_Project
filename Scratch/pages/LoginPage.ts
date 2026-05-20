import { Page } from "@playwright/test";

export class LoginPage
{
    constructor(private page: Page){}
    phonenumber = '#phone_input'
    email='#email'
    continueBtn='#submitBtn'
    async loginPhone(phone:string)
    {
        await this.page.fill(this.phonenumber,phone),
        await this.page.click(this.continueBtn)

    }
    async loginEmail(email:string)
    {
        await this.page.fill(this.email,email),
        await this.page.click(this.continueBtn)

    }
    
}  