import Actions, { By, Key, Builder, until } from "selenium-webdriver";

export const recursiveClick = async (url, btnSelector, clickCount) => {

  let driver = await new Builder().forBrowser("chrome").build();
  const actions = driver.actions({ async: true });

  await driver.get(url);
  await driver.sleep(2000)

  const button = await driver.findElement(By.xpath(btnSelector));

  console.log(button, clickCount)
}