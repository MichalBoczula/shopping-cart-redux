const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('main').waitFor();
});

test('Clicking the increase button, amount should change for element with ID rec1JZlfCIBOPdcT2', async ({ page }) => {
    const amountElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] .amount');

    ////wait for element
    ////await amountElement.waitFor();

    await amountElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    // await page.waitForTimeout(2000);

    const initialAmountText = await amountElement.textContent();
    const initialAmount = parseInt(initialAmountText, 10);

    const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

    await increaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    // await page.waitForTimeout(2000);

    await increaseBtnElement.click();

    // await page.waitForTimeout(2000);

    const updatedAmountText = await amountElement.textContent();
    const updatedAmount = parseInt(updatedAmountText, 10);

    await expect(updatedAmount).toBe(initialAmount + 1);
});

test('Clicking the increase button, amount in navbar should change', async ({ page }) => {
    const amountNavarElement = page.locator('.amount-container .total-amount');

    await amountNavarElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    //await page.waitForTimeout(2000);

    const amountText = await amountNavarElement.textContent();
    const amountNumber = parseInt(amountText, 10);

    const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

    await increaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await increaseBtnElement.click();

    //await page.waitForTimeout(2000);

    await amountNavarElement.evaluate((element) => {
        element.style.setProperty('background-color', 'black', 'important');
    });

    const updateTextAmount = await amountNavarElement.textContent();
    const updatedAmountNumber = parseInt(updateTextAmount, 10);

    //await page.waitForTimeout(2000);

    await expect(updatedAmountNumber).toBe(amountNumber + 1);
});

test('Clicking the decrease button, amount should change for element with ID rec1JZlfCIBOPdcT2', async ({ page }) => {
    const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

    await increaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await increaseBtnElement.click();

    //await page.waitForTimeout(2000);

    const amountElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] .amount');

    await amountElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    const textAmount = await amountElement.textContent();
    const amountNumber = parseInt(textAmount, 10);

    //await page.waitForTimeout(2000);

    const decreaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #decreaseBtn');

    await decreaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await decreaseBtnElement.click();

    //await page.waitForTimeout(2000);

    await amountElement.evaluate((element) => {
        element.style.setProperty('background-color', 'black', 'important');
    });

    const updatedTextAmount = await amountElement.textContent();
    const updatedAmountNumber = parseInt(updatedTextAmount, 10);

    //await page.waitForTimeout(2000);

    await expect(updatedAmountNumber).toBe(amountNumber - 1);
});

test('Clicking the decrease button, amount in navbar should change', async ({ page }) => {
    // arrange
    const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

    await increaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await increaseBtnElement.click();

    //await page.waitForTimeout(2000);

    const amountNavarElement = page.locator('.amount-container .total-amount');

    await amountNavarElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    const amountText = await amountNavarElement.textContent();
    const amountNumber = parseInt(amountText, 10);

    //await page.waitForTimeout(2000);

    // act
    const decreaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #decreaseBtn');

    await decreaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await decreaseBtnElement.click();

    //await page.waitForTimeout(2000);

    // assert 
    await amountNavarElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    const updatedAmount = await amountNavarElement.textContent();
    const updatedNumber = parseInt(updatedAmount, 10);

    //await page.waitForTimeout(2000);

    await expect(updatedNumber).toBe(amountNumber - 1);
});

test('Clicking the decrease button, should article disapper', async ({ page }) => {
    // arrange
    const articleElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"]');

    await articleElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });

    //await page.waitForTimeout(2000);

    // act
    const decreaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #decreaseBtn');

    await decreaseBtnElement.evaluate((element) => {
        element.style.setProperty('background-color', 'orange', 'important');
    });
    await decreaseBtnElement.click();

    //await page.waitForTimeout(2000);

    // assert 
    const dissapearedElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"]');

    await expect(dissapearedElement).not.toBeVisible();
});