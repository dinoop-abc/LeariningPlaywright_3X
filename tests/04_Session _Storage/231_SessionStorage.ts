import { chromium } from 'playwright';
import dotenv from "dotenv";

dotenv.config();
// Credentials live in .env (gitignored) — never hardcode them in a public repo.

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

async function saveSession() {
    if (!VWO_USER || !VWO_PASS) {
        throw new Error("Missing VWO_USER or VWO_PASS in .env");
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");

    const usernameField = page.locator("#login-username");
    const passwordField = page.locator("#login-password");
    const loginButton = page.locator("#js-login-btn");

    await usernameField.waitFor({ state: "visible", timeout: 20000 });
    await passwordField.waitFor({ state: "visible", timeout: 20000 });

    await usernameField.fill(VWO_USER);
    await passwordField.fill(VWO_PASS);

    await loginButton.waitFor({ state: "visible", timeout: 20000 });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click({ force: true });

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 30000 });

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await browser.close();
}

saveSession();