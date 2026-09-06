import { Page, expect, test } from '@playwright/test';

test("Handling the dialong event", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/");
    await page.locator(".container__selenium li a[href*='alert-box']").click(); //or a[href*='alert-box']
    // Hadling the javascript alert

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        // await dialog.accept()

    })
    await page.locator("//p[text()='JavaScript Alerts']/button").hover();
    //await page.getByText("JavaScript Alerts").locator("button").hover();
    await page.waitForTimeout(5000);
    await page.keyboard.press("Enter")
    await page.waitForTimeout(5000);
})

test("Handling the dialong event on demoqa.com site", async ({ page }) => {

    await page.goto("https://demoqa.com/");
    await page.locator("a[href*='alertsWindows']").click();
    await page.locator("a[href$='alerts']").click();

    // Hadling the javascript alert

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept()
    })
    await page.locator("#alertButton").click()
    await page.waitForTimeout(5000);
})

test("Handling the Confirm box alert", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/");
    await page.locator(".container__selenium li a[href*='alert-box']").click(); //or a[href*='alert-box']

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.getByText('Confirm box:').getByRole('button', { name: 'Click Me' }).click();
    await page.waitForTimeout(5000);

})

test("Confirm check box handling ", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.locator("a[href*='alertsWindows']").click();
    await page.locator("a[href$='alerts']").click();

    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.locator('#confirmButton').click();
    await page.waitForTimeout(3000);
    const text:string=await page.locator('#confirmResult').innerText();
    expect(text).toContain('selected');
})

test.only("Handling the prompt alert",async({page})=>{
    await page.goto("https://demoqa.com/");
    await page.locator("a[href*='alertsWindows']").click();
    await page.locator("a[href$='alerts']").click();

    page.on('dialog',async(dialog)=>{

        console.log(dialog.message);
        await dialog.dismiss();
    })
    await page.locator('#promtButton').click();
    // const enteredText:string=await page.locator('#promptResult').innerText();
    // expect(enteredText).not.toContain('Guru');

})
