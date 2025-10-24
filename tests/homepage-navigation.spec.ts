import { test, expect } from '@playwright/test';

test.describe('Homepage and Navigation', () => {
  test('Homepage Loading and Basic Elements', async ({ page }) => {
    // 1. Navigate to Amazon India
    await page.goto('https://www.amazon.in/');
    
    // 2. Verify presence of key elements
    // Amazon logo (tries a couple of common selectors)
    const logo = page.locator('a#nav-logo-sprites, a#nav-logo, img[alt*="Amazon"]');
    await expect(logo.first()).toBeVisible();

    // Search bar
    const searchInput = page.locator('#twotabsearchtextbox');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();

    // Cart icon (link/button)
    const cart = page.locator('a#nav-cart, #nav-cart');
    await expect(cart.first()).toBeVisible();

    // Sign in/Account menu
    await expect(page.locator('#nav-link-accountList, a#nav-link-accountList-nav-line-1')).toBeVisible();

    // Category navigation menu (hamburger menu)
    await expect(page.locator('#nav-hamburger-menu')).toBeVisible();

    // Footer links
    await expect(page.locator('#navFooter')).toBeVisible();
  });

  test('Category Navigation', async ({ page }) => {
    // 1. Navigate to Amazon India
    await page.goto('https://www.amazon.in/');
    
    // 2. Click on the hamburger menu ("All")
    await page.click('#nav-hamburger-menu');
    
    // Wait for the menu to be visible (menu uses .hmenu or .hmenu-visible)
    const menu = page.locator('.hmenu, .hmenu-visible');
    await expect(menu.first()).toBeVisible();

    // 3. Verify main category list appears
    const menuItems = menu.locator('a.hmenu-item, .hmenu-item');
    await expect(menuItems.first()).toBeVisible();

    // 4. Try to find a useful category (Electronics or Mobiles) using a tolerant text match
    const category = menu.locator('text=/Electronics|Mobiles|Mobiles & Accessories/i').first();
    if (await category.count() > 0) {
      await category.click();
    } else {
      // fallback: click the first category link
      await menuItems.first().click();
    }

    // After clicking a category, either a sub-menu appears or navigation happens. Try to click a subcategory link if available.
    const subMenu = page.locator('.hmenu-visible a.hmenu-item, .hmenu a.hmenu-item');
    if (await subMenu.count() > 1) {
      // click the first subcategory that is visible and not the parent link
      await subMenu.nth(1).click();
    }

    // Verify we land on a listing or category page: look for search/result containers or headings
    const searchResultsSelector = '[data-component-type="s-search-result"], .s-result-item, .s-main-slot';
    const headingSelector = 'h1, h2';

    // Wait for either search results or a heading to appear on the page.
    const landedElement = await Promise.race([
      page.waitForSelector(searchResultsSelector, { state: 'visible', timeout: 7000 }).catch(() => null),
      page.waitForSelector(headingSelector, { state: 'visible', timeout: 7000 }).catch(() => null),
    ]);

    // Assert we landed on a listing/category page
    expect(landedElement).toBeTruthy();
  });
});