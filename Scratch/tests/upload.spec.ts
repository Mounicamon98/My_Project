import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboard } from "../pages/Dashboard"
import { Upload } from "../pages/Upload"
import { URLs } from "../enums/URLs"

  let uploadFile: Upload
    test("Verify user is able to upload a file",
        async ({ page }) =>
    {
        await page.goto(URLs.SETTINGS_URL);

            const uploadsetfile = new Upload(page);
            await page.waitForTimeout(5000)
    await uploadsetfile.uploadFile("C:/images/1.jpg");

    
      })
    
  
