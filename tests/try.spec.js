//I will just try and search up something in google

const { test, expect } = require('@playwright/test');

test ('This is searching something in google', async({page})=> {
    await page.goto('https://www.google.com.au/')
    await expect(page).toHaveTitle('Google');
  
const combobox = await page.getByRole('combobox');

    await combobox.click();
    await combobox.fill('Apple');

    
    await page.keyboard.press('Enter');





})

