import { test, expect } from "@playwright/test";

test.describe("login functionality", () => {
  test.beforeEach("Go to the login page", async ({ page }) => {
    //Launch URl and assert title and header
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //Click on the make appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
  });

  test("Should login successfully", async ({ page }) => {
    //Successful Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert a test
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test("Should prevent login with incorrect creds", async ({ page }) => {
    //Unsuccesful Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("WrongPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert a error message

    await expect(
      page.getByText(
        "Login failed! Please ensure the username and password are valid.",
      ),
    ).toBeVisible();
  });
});
