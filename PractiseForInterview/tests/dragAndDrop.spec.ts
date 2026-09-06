import{Locator, Page,expect,test} from "@playwright/test";

test("Validating the drag and drop operation",async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/drag-and-drop-demo/");
    await page.getByText('Draggable 1').dragTo(page.locator('#mydropzone'));
    await page.getByText('Draggable 2').dragTo(page.locator('#mydropzone'));

    await page.screenshot({path:'tests/list.png',fullPage:true});

    const list:Locator[]= await page.locator('#droppedlist span').all();

    await page.waitForTimeout(4000);

    

    for(const option of list)
    {
        const text= await option.innerText();
               expect(text).toContain("Draggable")
        console.log(text);
    }

    await page.waitForTimeout(4000);

})

test.only("Another way of drag and drop",async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/ajax-form-submit-demo/");
    await page.locator('#description').click();
    await page.keyboard.press('G');
    await page.keyboard.press('u');
    await page.keyboard.press('R');
    await page.keyboard.press('u')
    await page.waitForTimeout(3000);

    await page.mouse.wheel(500,0)

})  