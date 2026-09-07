import { Page, expect, test, Locator } from "@playwright/test";

// Select the from date and to date from the same or different month and year
test("Custom Date Picker Dual Month", async ({ page }) => {

    const targetMonth: string = "August";
    const targetYear: string = "2026";
    const targetFromDate: string = "23";

    const endTargetMonth: string = "December";
    const endTargetYear: string = "2026";
    const targetToDate: string = "28";

    await page.goto("https://www.booking.com");
    const popUpCloseBtn: Locator = page.locator("button[aria-label='Dismiss sign-in info.']");
    await popUpCloseBtn.waitFor({ state: "visible", timeout: 10000 });
    if (await popUpCloseBtn.isVisible()) {
        await popUpCloseBtn.click();
    }
    await page.locator("button[data-testid='searchbox-dates-container']").click();

    // const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
    // await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
    // const monthYearText = await monthYearLocator.textContent()

    // console.log("Month and Year:", monthYearText);
    //const nextButtonLocator = page.locator(".ui-datepicker-next");
    //const prevButtonLocator = page.locator(".ui-datepicker-prev");
    while (true) {
        const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
        await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
        const monthYearText = await monthYearLocator.textContent()

        if (monthYearText?.includes(targetMonth) && monthYearText?.includes(targetYear)) {
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    const tableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
    const rows: Locator[] = await tableLocator.locator("tr").all();
    for (let row of rows) {
        let valuesLocator: Locator[] = await row.locator("td span span").all();
        for (let value of valuesLocator) {
            {
                const valueText = await value.innerText();
                if (valueText === targetFromDate) {
                    await value.click();
                    break;
                }

            }
        }
    }

    // Capturing the end date

    while (true) {
        const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
        await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
        const monthYearText = await monthYearLocator.textContent();

        if (monthYearText?.includes(endTargetMonth) && monthYearText?.includes(endTargetYear)) {
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    const endtableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
    const endrows: Locator[] = await endtableLocator.locator("tr").all();
    for (let row of endrows) {
        const endValues: Locator[] = await row.locator("td span span").all();
        for (let value of endValues) {

            const valueText = await value.innerText();
            if (valueText === targetToDate) {
                console.log(await value.textContent());
                await value.click();
                await page.waitForTimeout(5000);
                break;                
            }

        }
        
    }
    
})

// Select the from date and to date from the consgicutive month and year

test("Custom Date Picker Dual Month Consecutive", async ({ page }) => {

    const targetMonth: string = "December";
    const targetYear: string = "2026";
    const targetFromDate: string = "23";

    const endTargetMonth: string = "December";
    const endTargetYear: string = "2026";
    const targetToDate: string = "28";

    await page.goto("https://www.booking.com");
    const popUpCloseBtn: Locator = page.locator("button[aria-label='Dismiss sign-in info.']");
    await popUpCloseBtn.waitFor({ state: "visible", timeout: 10000 });
    if (await popUpCloseBtn.isVisible()) {
        await popUpCloseBtn.click();
    }
    await page.locator("button[data-testid='searchbox-dates-container']").click();

    while (true) {
        const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
        await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
        const monthYearText = await monthYearLocator.textContent()

        if (monthYearText?.includes(targetMonth) && monthYearText?.includes(targetYear)) {
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    const tableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
    const rows: Locator[] = await tableLocator.locator("tr").all();
    for (let row of rows) {
        let valuesLocator: Locator[] = await row.locator("td span span").all();
        for (let value of valuesLocator) {
            {
                const valueText = await value.innerText();
                if (valueText === targetFromDate) {
                    await value.click();
                    await page.waitForTimeout(5000);
                    break;                    
                }

            }
        }
    }

    let pageNo:number=0;
    while (true) {
    
        const firstPageMonthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
        await firstPageMonthYearLocator.waitFor({ state: "visible", timeout: 10000 });
        const firstPageMonthYearText = await firstPageMonthYearLocator.textContent()

        const secondPageMonthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(1);
        await secondPageMonthYearLocator.waitFor({ state: "visible", timeout: 10000 });
        const secondPageMonthYearText = await secondPageMonthYearLocator.textContent()
        
        if (firstPageMonthYearText?.includes(endTargetMonth) && firstPageMonthYearText?.includes(endTargetYear)) {
            break;
        }else if (secondPageMonthYearText?.includes(endTargetMonth) && secondPageMonthYearText?.includes(endTargetYear)) {
            pageNo=1;
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }
    const endTableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(pageNo);
    const endRows: Locator[] = await endTableLocator.locator("tr").all();
    for (let row of endRows) {
        let valuesLocator: Locator[] = await row.locator("td span span").all();
        for (let value of valuesLocator) {
            {
                const valueText = await value.innerText();
                if (valueText === targetToDate) {
                    await value.click();
                 //   await page.waitForTimeout(5000);
                    break;                    
                }

            }
        }
    }
})

// Select the dates for 2 days on the same page 

