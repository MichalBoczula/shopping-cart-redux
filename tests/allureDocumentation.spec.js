import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import fs from 'fs';
import path from 'path';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('main').waitFor();
});

test('Generate first doc test', async ({ page }, testInfo) => {
    const screenshotDir = path.join(__dirname, './screens/Documentation/FirstTest');
    const screenshotFile = 'InitialState.png';
    const screenshotFile2 = 'ClickIncreaseButton.png';
    const screenshotFile3 = 'FinalState.png';
    const screenshotPath = path.join(screenshotDir, screenshotFile);
    const screenshotPath2 = path.join(screenshotDir, screenshotFile2);
    const screenshotPath3 = path.join(screenshotDir, screenshotFile3);
    let initialAmount;

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const amountElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] .amount');

    await allure.step("Initial state", async () => {
        await amountElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await page.screenshot({ path: screenshotPath });

        await testInfo.attach('Initial state', {
            body: fs.readFileSync(screenshotPath),
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

        await page.screenshot({ path: screenshotPath2 });

        await testInfo.attach('Click increase button', {
            body: fs.readFileSync(screenshotPath2),
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

        await page.screenshot({ path: screenshotPath3 });

        await testInfo.attach('Final state', {
            body: fs.readFileSync(screenshotPath3),
            contentType: 'image/png',
        });

        await expect(updatedAmount).toBe(initialAmount + 1);
    });
});

test('Generate second doc test', async ({ page }, testInfo) => {
    const screenshotDir = path.join(__dirname, './screens/Documentation/SecondTest');
    const screenshotFile = 'InitialState.png';
    const screenshotFile2 = 'ClickIncreaseButton.png';
    const screenshotFile3 = 'FinalState.png';
    const screenshotPath = path.join(screenshotDir, screenshotFile);
    const screenshotPath2 = path.join(screenshotDir, screenshotFile2);
    const screenshotPath3 = path.join(screenshotDir, screenshotFile3);
    let initialAmount;

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const amountElement = page.locator('#total');

    await allure.step("Initial state", async () => {
        await amountElement.evaluate((element) => {
            element.style.setProperty('background-color', 'orange', 'important');
        });

        await page.screenshot({ path: screenshotPath });

        await testInfo.attach('Initial state', {
            body: fs.readFileSync(screenshotPath),
            contentType: 'image/png',
        });

        // const initialAmountText = await amountElement.textContent();
        // initialAmount = parseInt(initialAmountText, 10);

        // await amountElement.evaluate((element) => {
        //     element.style.setProperty('background-color', 'transparent', 'important');
        // });
    });

    // await allure.step("Click button", async () => {
    //     const increaseBtnElement = page.locator('[data-testid="rec1JZlfCIBOPdcT2"] #increaseBtn');

    //     await increaseBtnElement.evaluate((element) => {
    //         element.style.setProperty('background-color', 'orange', 'important');
    //     });

    //     await page.screenshot({ path: screenshotPath2 });

    //     await testInfo.attach('Click increase button', {
    //         body: fs.readFileSync(screenshotPath2),
    //         contentType: 'image/png',
    //     });

    //     await increaseBtnElement.click();

    //     await increaseBtnElement.evaluate((element) => {
    //         element.style.setProperty('background-color', 'transparent', 'important');
    //     });
    // });

    // await allure.step("Final Result", async () => {
    //     const updatedAmountText = await amountElement.textContent();
    //     const updatedAmount = parseInt(updatedAmountText, 10);
    //     const amountInNavElement = page.locator('.amount-container .total-amount');

    //     await amountInNavElement.evaluate((element) => {
    //         element.style.setProperty('background-color', 'orange', 'important');
    //     });

    //     await amountElement.evaluate((element) => {
    //         element.style.setProperty('background-color', 'orange', 'important');
    //     });

    //     await page.screenshot({ path: screenshotPath3 });

    //     await testInfo.attach('Final state', {
    //         body: fs.readFileSync(screenshotPath3),
    //         contentType: 'image/png',
    //     });

    //     await expect(updatedAmount).toBe(initialAmount + 1);
    // });
});