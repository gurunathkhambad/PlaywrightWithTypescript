import{test,Page,expect} from '@playwright/test';

test('Handling the new tabs',async({page,context})=>{

    await page.goto("https://demoqa.com/");
    await page.locator("a[href*='alertsWindows']").click();
    await page.locator("a[href*='browser-windows']").click();

    const [newPage]=await Promise.all([
      context.waitForEvent('page'),
      page.getByText('New Tab').click()
    ])
    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    const title=await newPage.locator('#sampleHeading').innerText();
    console.log(title);
    expect(title).toBe('This is a sample page')
    await newPage.close()
    // await page.bringToFront();
    // expect(await page.title()).toBe('demosite');
     await page.waitForTimeout(3000);
})

test("Handling the windows",async({page,context})=>{

    await page.goto("https://demoqa.com/");
    await page.locator("a[href*='alertsWindows']").click();
    await page.locator("a[href*='browser-windows']").click();

    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Window'}).and(page.locator('#windowButton')).click()
    ])

    await page.waitForLoadState();
   // await page.waitForTimeout(3000);
    const title=await newPage.locator('#sampleHeading').innerText();
    console.log(title);
    expect(title).toBe('This is a sample page')
   // await newPage.close()
    await page.bringToFront();
    expect(await page.title()).toBe('demosite');
     await page.waitForTimeout(3000);

})

test("Opening the new tab through code",async({page,context})=>{

    await page.goto("https://demoqa.com/");
    const page2=await context.newPage();
    await page2.goto("https://demoqa.com/sample");
    await page.waitForLoadState();
   // await page.waitForTimeout(3000);
    const title=await page2.locator('#sampleHeading').innerText();
    console.log(title);
    expect(title).toBe('This is a sample page')
   // await newPage.close()
    await page.bringToFront();
    expect(await page.title()).toBe('demosite');
     await page.waitForTimeout(3000);
})

test("Opening the window through the code by evalute method",async({page,context})=>{

    await page.goto("https://demoqa.com/");
    const [newPage]= await Promise.all([
    context.waitForEvent('page'),   
    page.evaluate(()=>{
        window.open('https://demoqa.com/sample');       
    })
    ])
     await page.waitForLoadState();
   // await page.waitForTimeout(3000);
    const title=await newPage.locator('#sampleHeading').innerText();
    console.log(title);
    expect(title).toBe('This is a sample page')
   // await newPage.close()
    await page.bringToFront();
    expect(await page.title()).toBe('demosite');
     await page.waitForTimeout(3000);
})