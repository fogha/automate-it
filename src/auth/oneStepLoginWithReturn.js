import { By, Builder, until, Key } from "selenium-webdriver";

export const oneStepLoginWithReturn = async (url, emailSelector, passwordSelector, email, password) => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.sleep(2000)
  await driver.wait(until.elementLocated(By.name(emailSelector)), 3000).sendKeys(email);
  await driver.wait(until.elementLocated(By.name(passwordSelector)), 3000).sendKeys(password, Key.RETURN);
  await driver.sleep(2000);

}