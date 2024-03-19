const { test, expect } = require('@playwright/test');

test('Navbar contains useReducer in h3 tag', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const navbarText = page.locator('nav .nav-center h3');

    await page.waitForTimeout(2000);

    await navbarText.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    await page.waitForTimeout(2000);

    const navbarTitle = await navbarText.textContent();
    expect(navbarTitle).toBe('useReducer');
});

test('Navbar displays the correct amount of products in the cart', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const amountElement = page.locator('.amount-container .total-amount');

    await page.waitForTimeout(2000);

    await amountElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    await page.waitForTimeout(2000);

    const amountText = await amountElement.textContent();
    const amountNumber = parseInt(amountText, 10);

    expect(amountNumber).toBe(4);
});
