import { expect, test } from "@playwright/test";
import path from "node:path";

const screenshotDir = path.join("e2e", "screenshots");

test.describe("Sunshine Kindergarten landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#home")).toBeVisible();
  });

  test("loads the homepage with key content", async ({ page }) => {
    await expect(page).toHaveTitle(/Sunshine Kindergarten/i);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Where Little");
    await expect(page.getByText("Enrolling for 2025–2026!")).toBeVisible();
    await expect(page.getByRole("button", { name: "Enroll Your Child" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Programs for Every/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Start Your Child's Journey Today/i })).toBeVisible();
  });

  test("captures desktop homepage screenshots", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-desktop", "Desktop-only screenshot test");

    await page.screenshot({
      path: path.join(screenshotDir, "homepage-full.png"),
      fullPage: true,
    });

    await page.locator("#home").screenshot({
      path: path.join(screenshotDir, "hero-section.png"),
    });

    await page.locator("#programs").screenshot({
      path: path.join(screenshotDir, "programs-section.png"),
    });

    await page.locator("#contact").screenshot({
      path: path.join(screenshotDir, "contact-section.png"),
    });
  });

  test("captures mobile homepage screenshot", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-mobile", "Mobile-only screenshot test");

    await page.screenshot({
      path: path.join(screenshotDir, "homepage-mobile.png"),
      fullPage: true,
    });
  });

  test("navigates to programs section from hero CTA", async ({ page }) => {
    await page.getByRole("button", { name: "Explore Programs" }).click();
    await expect(page.locator("#programs")).toBeInViewport();
  });

  test("shows 404 page for unknown routes", async ({ page }) => {
    await page.goto("/does-not-exist");
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "not-found.png"),
      fullPage: true,
    });
  });
});
