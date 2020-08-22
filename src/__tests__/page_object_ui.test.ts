
import googlePage from "./page_objects/GooglePage";
import Browser from "./core/Browser";


let browser;

beforeAll(async () => {
    browser = await Browser.launchBrowser();
})

afterAll(async () => {
    await browser.close();
})

describe ('Page Object UI test', () => {
    test("Google search", async () => {
        const page = await Browser.openPage(browser);
        await page.goto("https://www.google.com", {"timeout": 10000});
        await googlePage.fillAndSearch(page);
        expect(await googlePage.getFirstResultURL(page)).toEqual("www.codifun.com");
    });
})
