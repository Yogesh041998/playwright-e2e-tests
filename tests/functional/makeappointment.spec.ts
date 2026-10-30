import { test, expect } from "@playwright/test";

test("Should login and make the appointment", async ({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await page.getByLabel('Username').fill('John Doe');
    await page.getByLabel('Password').fill('ThisIsNotPassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');
    await page.getByRole('radio', { name: 'Medicare' }).check();
    await page.locator('span').click();
    await page.getByRole('cell', { name: '1' }).first().click();
    await page.getByRole('textbox', { name: 'Comment' }).fill('Make Apoointment');
    await page.getByRole('button', { name: 'Book Appointment' }).click();
    await page.getByText('Please be informed that your').click();
    await expect(page.locator('h2')).toContainText('Appointment Confirmation');

    await page.getByRole('heading', { name: 'We Care About Your Health' }).click()


    await page.getByRole('heading', { name: 'We Care About Your Health' })


})