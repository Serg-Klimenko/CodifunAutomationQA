import playwright from "playwright";

describe ("UI test action", () => {
    test("Google search", async () => {
        //
//        const browser = await playwright.firefox.launch({headless: false});
        // Запуск браузера для Docker
        const browser = await playwright.firefox.launch({headless: true, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']});
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.google.com");
        await page.waitForSelector(".gLFyf");
        await page.fill(".gLFyf", "Codifun");
        await page.click(".gNO89b");
        await page.waitForSelector("#search");
        const firstResultURL = await page.$eval(".iUh30", el => el.textContent);
        expect(firstResultURL).toEqual("www.codifun.com");
        await browser.close();
    });
})