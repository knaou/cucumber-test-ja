const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, Page, Browser } = require('@playwright/test');
const { expect } = require('chai');

Given('{string} を開く', async function (url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page
  await page.goto(url);
});

When('{string} に {string} を入力する', async function (target, param) {
  if (this.page == null) throw new Error("page is null")
  await this.page.fill(target, param);
});

When('{string} で {string} を押す', async function (target, param) {
  if (this.page == null) throw new Error("page is null")
  await this.page.press(target, param);
});

When('{string} で {string} を押して遷移する', async function (target, param) {
  if (this.page == null) throw new Error("page is null")
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'load'}),
    this.page.press(target, param),
  ]);
});

When('{string} をクリックして遷移する', async function (target) {
  if (this.page == null) throw new Error("page is null")
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'load'}),
    this.page.click(target),
  ]);
});

When('{float} 秒待つ', async function (tm) {
  await new Promise((resolve) => setTimeout(resolve, tm * 3));
});

Then('スクリーンショットを撮る', async function () {
  if (this.page == null) throw new Error("page is null")
  const buffer = await this.page.screenshot({ fullPage: true });
  await this.attach(buffer.toString('base64'), 'base64:image/png')
});

Then('ページに {string} が含まれる', async function (expectedText) {
  if (this.page == null) throw new Error("page is null")
  const hasText = await this.page.$(`text=${expectedText}`);
  expect(hasText).not.to.be.null;
});
