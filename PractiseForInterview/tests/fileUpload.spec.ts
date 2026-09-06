import { test, expect, Page } from '@playwright/test'

test("Validating the file upload scenario", async ({ page, context }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/");
    await page.locator('a[href*="upload-file-demo"]').click();

    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#file').click()
    ])
    await fileChooser.setFiles('D:\\PractiseForInterview\\tests\\Testfile\\Testing_the_file_upload_scenario.pdf');
  
  
  //  await page.locator('#file').setInputFiles('D:\\PractiseForInterview\\tests\\Testfile\\Testing_the_file_upload_scenario.pdf');
   
    const message: string = await page.locator('#error').innerText();
    await page.waitForTimeout(4000);
    expect(message).toBe("File Successfully Uploaded");
    await page.waitForTimeout(4000);
})