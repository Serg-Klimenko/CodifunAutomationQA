import playwright from "playwright";
import config from "./config";

class Browser {
    async launchBrowser() {
        return await playwright[config.browserName].launch({headless:false});
    }
    async openPage(browser) {
        const context = await browser.newContext();
        return await context.newPage();

    }
}
export default new Browser();