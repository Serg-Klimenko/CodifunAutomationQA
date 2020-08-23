//Эмуляция мобильных устройств - Software Tester Automation 16
import playwright, { devices } from "playwright";

let browser;
let context;

beforeAll( async () => {
    browser = await playwright.firefox.launch({headless: false});
    // context = await browser.newContext(devices["iPhone 7 landscape"]);
    // !!!context for mobile not work after upgrade playwright to 1.3.0
    context = await browser.newContext();
})

afterAll( async () => {
    browser.close();
})

describe("UI tests", () => {
    test("Mobile Google search", async () => {
        const page = await context.newPage();
        await page.goto("https://www.google.com", { timeout: 30000 });
        await page.waitForSelector(".gLFyf");
        await page.fill(".gLFyf", "Codifun");
        await page.keyboard.press("Enter");

    })
})