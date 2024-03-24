const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('main').waitFor();
});

test('Generate first doc test', async ({ page }, testInfo) => {
    const amountElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] .amount');
    let initialAmount;

    await allure.step("Initial state", async () => {
        await amountElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await testInfo.attach('Initial state', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });

        const initialAmountText = await amountElement.textContent();
        initialAmount = parseInt(initialAmountText, 10);

        await amountElement.evaluate((element) => {
            element.style.setProperty('background-color', 'transparent', 'important');
        });
    });

    await allure.step("Click button", async () => {
        const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

        await increaseBtnElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await testInfo.attach('Click increase button', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });

        await increaseBtnElement.click();

        await increaseBtnElement.evaluate((element) => {
            element.style.setProperty('background-color', 'transparent', 'important');
        });
    });

    await allure.step("Final Result", async () => {
        const updatedAmountText = await amountElement.textContent();
        const updatedAmount = parseInt(updatedAmountText, 10);
        const amountInNavElement = page.locator('.amount-container .total-amount');

        await amountInNavElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await amountElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await testInfo.attach('Final state', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });

        await expect(updatedAmount).toBe(initialAmount + 1);
    });
});