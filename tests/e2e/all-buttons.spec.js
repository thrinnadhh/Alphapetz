// @ts-check
import { test, expect } from '@playwright/test';
import { AlphapetzPage } from './pages/AlphapetzPage.js';

test.describe('Alphapetz Platform — Complete Button & Interaction Test Suite', () => {
  let app;

  test.beforeEach(async ({ page }) => {
    app = new AlphapetzPage(page);
    await app.goto();
  });

  test('1. Header & Navigation Buttons — Toggle, Active States, and Cart Drawer', async ({ page }) => {
    // Brand link
    await expect(app.brandHomeLink).toBeVisible();
    await expect(app.brandHomeLink).toHaveAttribute('href', '#home');

    // Desktop nav buttons (if desktop viewport)
    const viewport = page.viewportSize();
    if (viewport && viewport.width >= 768) {
      await expect(app.shopNavBtn).toBeVisible();
      await app.vetNavBtn.click();
      await expect(app.vetNavBtn).toHaveClass(/active/);
      await expect(app.shopNavBtn).not.toHaveClass(/active/);

      await app.groomingNavBtn.click();
      await expect(app.groomingNavBtn).toHaveClass(/active/);

      await app.passportNavBtn.click();
      await expect(app.passportNavBtn).toHaveClass(/active/);

      await app.shopNavBtn.click();
      await expect(app.shopNavBtn).toHaveClass(/active/);
    }

    // Pet profile chip
    await expect(app.petProfileBtn).toBeVisible();

    // Cart Button open and close
    await expect(app.openCartBtn).toBeVisible();
    await app.openCartBtn.click();
    await expect(app.cartDrawer).toHaveClass(/active/);

    await expect(app.closeCartBtn).toBeVisible();
    await app.closeCartBtn.click();
    await expect(app.cartDrawer).not.toHaveClass(/active/);
  });

  test('2. Search Bar Row Buttons & Trending Tag Chips', async ({ page }) => {
    // Type in search input -> Clear button appears
    await app.searchInput.fill('Puppy');
    await expect(app.clearSearchBtn).toBeVisible();

    // Click clear button -> input is empty
    await app.clearSearchBtn.click();
    await expect(app.searchInput).toHaveValue('');
    await expect(app.clearSearchBtn).not.toBeVisible();

    // Test Trending Tag Chips
    const count = await app.trendingTagChips.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // Click Royal Canin tag
    const royalCaninChip = page.locator('.trending-tags-row .tag-chip[data-search="Royal Canin"]');
    await expect(royalCaninChip).toBeVisible();
    await royalCaninChip.click();
    await expect(app.searchInput).toHaveValue('Royal Canin');

    // Verify products list is filtered to Royal Canin
    const productTitles = page.locator('.product-card .product-title');
    const firstTitle = await productTitles.first().textContent();
    expect(firstTitle).toContain('Royal Canin');

    // Click NexGard tag
    const nexgardChip = page.locator('.trending-tags-row .tag-chip[data-search="NexGard"]');
    await nexgardChip.click();
    await expect(app.searchInput).toHaveValue('NexGard');

    // Reset via clear button
    await app.clearSearchBtn.click();
    await expect(app.searchInput).toHaveValue('');
  });

  test('3. Promotional Banner Carousel — Arrows, Dots, and CTA Navigation', async ({ page }) => {
    await expect(app.bannerSlider).toBeVisible();
    await expect(app.bannerPrevBtn).toBeVisible();
    await expect(app.bannerNextBtn).toBeVisible();

    // Check 4 slides exist
    const slidesCount = await app.bannerSlides.count();
    expect(slidesCount).toBe(4);

    // Initial state: slide 1 is active, dot 1 is active
    const dots = app.carouselDots;
    await expect(dots.nth(0)).toHaveClass(/active/);

    // Click next arrow -> advances to slide 2
    await app.bannerNextBtn.click();
    await expect(dots.nth(1)).toHaveClass(/active/);

    // Click next arrow -> advances to slide 3
    await app.bannerNextBtn.click();
    await expect(dots.nth(2)).toHaveClass(/active/);

    // Click prev arrow -> returns to slide 2
    await app.bannerPrevBtn.click();
    await expect(dots.nth(1)).toHaveClass(/active/);

    // Click directly on dot 4 -> advances to slide 4
    await dots.nth(3).click();
    await expect(dots.nth(3)).toHaveClass(/active/);

    // Click dot 1 -> back to slide 1
    await dots.nth(0).click();
    await expect(dots.nth(0)).toHaveClass(/active/);

    // Check slide CTA button
    const firstCta = app.bannerCtas.first();
    await expect(firstCta).toBeVisible();
    await expect(firstCta).toHaveAttribute('href', '#storeSection');
  });

  test('4. Quick Category Action Rail Buttons', async ({ page }) => {
    // Click Dog Food bubble
    await app.quickDogFood.click();
    const dogChip = page.locator('.filter-chip[data-category="dog-food"]');
    await expect(dogChip).toHaveClass(/active/);

    // Click Cat Food bubble
    await app.quickCatFood.click();
    const catChip = page.locator('.filter-chip[data-category="cat-food"]');
    await expect(catChip).toHaveClass(/active/);

    // Click Vet Rx bubble
    await app.quickPharmacy.click();
    const rxChip = page.locator('.filter-chip[data-category="pharmacy"]');
    await expect(rxChip).toHaveClass(/active/);

    // Click Grooming bubble -> scrolls to groomingSection
    await app.quickGrooming.click();
    const groomingSection = page.locator('#groomingSection');
    await expect(groomingSection).toBeVisible();

    // Click Doctor bubble -> scrolls to vetBookingSection
    await app.quickVet.click();
    const bookingSection = page.locator('#vetBookingSection');
    await expect(bookingSection).toBeVisible();
  });

  test('5. Bruno Urgent Vaccine Booster CTA Button', async ({ page }) => {
    await expect(app.quickVaccineBookingBtn).toBeVisible();
    await app.quickVaccineBookingBtn.click();

    // Cart drawer should open
    await expect(app.cartDrawer).toHaveClass(/active/);

    // Cart should contain the booster vaccine item
    const cartItems = page.locator('.cart-item-title');
    const boosterItem = cartItems.filter({ hasText: 'Anti-Rabies Booster Vaccine' });
    await expect(boosterItem).toBeVisible();

    // Close drawer
    await app.closeCartBtn.click();
    await expect(app.cartDrawer).not.toHaveClass(/active/);
  });

  test('6. Store Catalog Filter Chips & Add to Cart Buttons', async ({ page }) => {
    // Test filter chips
    const catChip = page.locator('.filter-chip[data-category="cat-food"]');
    await catChip.click();
    await expect(catChip).toHaveClass(/active/);

    // Reset filters button
    await expect(app.resetFiltersBtn).toBeVisible();
    await app.resetFiltersBtn.click();

    const allChip = page.locator('.filter-chip[data-category="all"]');
    await expect(allChip).toHaveClass(/active/);

    // Test product card "Add to Cart" button
    const firstAddBtn = app.addToCartBtns.first();
    await expect(firstAddBtn).toBeVisible();
    await firstAddBtn.click();

    // Verify toast or cart badge increments
    await expect(app.cartCountBadge).not.toHaveText('0');

    // Test Quick View Modal via clicking product image
    const firstImgBox = page.locator('.product-img-box').first();
    await firstImgBox.click();
    await expect(app.quickModal).toHaveClass(/active/);

    await app.closeQuickBtn.click();
    await expect(app.quickModal).not.toHaveClass(/active/);
  });

  test('7. Cart Drawer Stepper Buttons, Promo Code, and Checkout Flow', async ({ page }) => {
    // Add product to cart first
    await app.addToCartBtns.first().click();

    // Open Cart
    await app.openCartBtn.click();
    await expect(app.cartDrawer).toHaveClass(/active/);

    // Test Stepper Buttons inside Cart Drawer
    const firstCartRow = page.locator('#cartItemsContainer .cart-item-row').first();
    const qtySpan = firstCartRow.locator('.stepper-val');
    const initialQty = await qtySpan.textContent();

    const plusBtn = firstCartRow.locator('.stepper-btn').filter({ hasText: '+' });
    await plusBtn.click();
    await expect(qtySpan).toHaveText(String(Number(initialQty) + 1));

    // Test Promo Code Button
    await app.promoInput.fill('SEABREEZE');
    await app.applyPromoBtn.click();
    await expect(app.promoMessage).toHaveClass(/success/);
    await expect(app.promoMessage).toContainText('Coupon SEABREEZE applied');

    // Test Proceed to Checkout Button
    await expect(app.proceedToCheckoutBtn).toBeVisible();
    await app.proceedToCheckoutBtn.click();

    // Checkout Modal opens
    await expect(app.checkoutModal).toHaveClass(/active/);
    await expect(app.checkoutFormStep).toBeVisible();

    // Payment method buttons
    await expect(app.payUpiRadio).toBeVisible();
    await app.payCodRadio.check();
    await expect(app.payCodRadio).toBeChecked();

    // Place Order Button
    await app.checkoutSubmitBtn.click();
    await expect(app.checkoutSuccessStep).toBeVisible();

    // Return to Shop Button
    await expect(app.returnToShopBtn).toBeVisible();
    await app.returnToShopBtn.click();
    await expect(app.checkoutModal).not.toHaveClass(/active/);
  });

  test('8. Veterinary Appointment Booking Wizard Buttons', async ({ page }) => {
    // Service selection options
    const serviceOpts = app.serviceOptions;
    await expect(serviceOpts.first()).toBeVisible();

    // Select second service option (Vaccination)
    const vaccineOption = serviceOpts.nth(1);
    await vaccineOption.click();
    await expect(vaccineOption).toHaveClass(/selected/);

    // Select date chip
    const dateChips = app.dateChips;
    await dateChips.nth(1).click();
    await expect(dateChips.nth(1)).toHaveClass(/active/);

    // Select slot button
    const slotBtns = app.slotBtns;
    await slotBtns.first().click();
    await expect(slotBtns.first()).toHaveClass(/active/);

    // Confirm booking button
    await expect(app.confirmBookingBtn).toBeVisible();
    await app.confirmBookingBtn.click();

    // Should open cart with the appointment added
    await expect(app.cartDrawer).toHaveClass(/active/);
    const cartItems = page.locator('.cart-item-title');
    const appointmentItem = cartItems.filter({ hasText: 'Vet Appointment' });
    await expect(appointmentItem).toBeVisible();

    await app.closeCartBtn.click();
  });

  test('9. Grooming Spa Package CTA Buttons', async ({ page }) => {
    // Hydrotherapy Bath CTA (₹699)
    const bathBtn = page.locator('.btn-pastel-add[data-item="grooming-bath"]');
    await expect(bathBtn).toBeVisible();
    await bathBtn.click();

    await expect(app.cartDrawer).toHaveClass(/active/);
    const bathItem = page.locator('.cart-item-title').filter({ hasText: 'Hydrotherapy Bath & Dry' });
    await expect(bathItem).toBeVisible();

    await app.closeCartBtn.click();

    // Royal Grooming CTA (₹1,299)
    const royalBtn = page.locator('.btn-pastel-add[data-item="grooming-royal"]');
    await expect(royalBtn).toBeVisible();
    await royalBtn.click();

    await expect(app.cartDrawer).toHaveClass(/active/);
    const royalItem = page.locator('.cart-item-title').filter({ hasText: 'Full Royal Grooming' });
    await expect(royalItem).toBeVisible();

    await app.closeCartBtn.click();
  });

  test('10. Pet Passport Edit Vitals & Compliance Certificate Links', async ({ page }) => {
    // Edit Vitals Button with Prompt Dialog Handling
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('29.2');
    });

    await expect(app.editVitalsBtn).toBeVisible();
    await app.editVitalsBtn.click();

    // Verify weight updated on vital card
    const vitalValue = page.locator('.vital-value').first();
    await expect(vitalValue).toContainText('29.2 kg');

    // Certificate link with alert dialog
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      await dialog.accept();
    });

    const certLink = page.locator('.cert-link').first();
    await expect(certLink).toBeVisible();
    await certLink.click();

    // Hotline trigger check (top bar on desktop, quick action rail bubble on mobile)
    const viewport = page.viewportSize();
    if (viewport && viewport.width > 500) {
      await expect(app.erHotline).toBeVisible();
      await expect(app.erHotline).toHaveAttribute('href', 'tel:+919849073877');
    } else {
      const erBubble = page.locator('.quick-category-item[data-action="call-er"]');
      await expect(erBubble).toBeVisible();
    }
  });
});
