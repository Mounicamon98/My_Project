import {test , expect, Page} from "@playwright/test"
export class Upload
{
    constructor(private page:Page){}
    async uploadFile(filePath:string)
    {
        
        await this.page.getByText("Add").first().click()
        await this.page.getByPlaceholder("Consent Name").fill("Mounica")
        await this.page.getByText("Upload Consent").click()
        await this.page.locator('input[type="file"]').setInputFiles(filePath)
        await this.page.getByText("Upload").click();
    }
}