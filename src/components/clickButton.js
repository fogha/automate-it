import { By, Builder, until } from "selenium-webdriver";

export const ClickButton = async (url, buttonSelector) => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get(url);
  await driver.sleep(2000)

  await driver.wait(until.elementLocated(By.name(emailSelector)), 3000).click();


}