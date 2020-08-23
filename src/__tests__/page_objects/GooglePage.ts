class GooglePage {
  // fill 'Codifun' in Serch field and click button
  selectors = {
    inputField: ".gLFyf",
    searchButton: ".gNO89b",
    searchResults: "#search",
    resultURL: ".iUh30",
  };
  async fillAndSearch(page) {
    await page.waitForSelector(this.selectors.inputField);
    await page.fill(this.selectors.inputField, "Codifun");
    await page.click(this.selectors.searchButton);
  }
  //Return first result of search function fillAndSearch(page)
  async getFirstResultURL(page) {
    await page.waitForSelector(this.selectors.searchResults);
    return await page.$eval(this.selectors.resultURL, (el) => el.textContent);
  }
}

export default new GooglePage();
