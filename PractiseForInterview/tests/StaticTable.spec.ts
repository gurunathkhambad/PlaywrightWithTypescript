import {Locator, Page,expect,test} from "@playwright/test";

// Extract the each row values 

test("Static Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");
    const table:Locator=page.locator('table[name="BookTable"] tbody');
   const rows:Locator[]=await table.locator('tr').all();
   for(let row of rows.slice(1))
   {
        const rowData:string[]=await row.locator('td').allInnerTexts();
        console.log(rowData.join(", "));
   }

})

// Extract the value of those row which has Java 
test("extracting the rows values which has Java", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");
    const table:Locator=page.locator('table[name="BookTable"] tbody');
    const rows:Locator[]=await table.locator('tr').all();
    for(let row of rows.slice(1))
    {
        const rowData:any[]=await row.locator('td').allInnerTexts();
        if(rowData[2].toLowerCase()==="java")
        {
            console.log(rowData.join(", "));
        }
    }
})