import playwright from "playwright";

describe("UI test", () => {
  test("Launch browser", async () => {
      const browser = await playwright.firefox.launch({headless: false});
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("http://google.com");
      await page.waitForTimeout(1000);
      await browser.close();
  });
});
