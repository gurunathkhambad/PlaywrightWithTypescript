import { Page, expect, test } from "@playwright/test";

test("Validating the file download scenario", async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.locator('a[href*="file-to-download"]').click();
    await page.locator('#textbox').fill("Testing the file downoload");
    // await page.keyboard.type("Testing the file downoload");
    await page.locator('#create').scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);
    await page.locator('#create').click();
    await page.waitForTimeout(4000);
    await page.getByText('Download', { exact: true }).scrollIntoViewIfNeeded();
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await page.getByText('Download', { exact: true }).click()
    ])

    await download.saveAs('D:\\PractiseForInterview\\tests\\Testing_the_file_download_scenario.pdf')

    await page.waitForTimeout(4000);
})