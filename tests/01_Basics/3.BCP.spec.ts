import { chromium, Browser, BrowserContext, Page } from "playwright"; //Import 4 Things from playwright

async function run() { //creates an asynchronous function.
// LEVEL 1: Launch browser — heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false }); //let browser: Browser is a typescript.The colon means type annotation in TypeScript
    console.log("Browser Launched", browser);
// LEVEL 2: Create context — fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);
// LEVEL 3: Open page — a tab inside the context
    let page: Page = await context1.newPage();
         await page.goto("https://example.com");
    console.log("Page opened");
// Cleanup - reverse oder
    await page.close(); //close page
    await context1.close();
    await browser.close();
}
run();