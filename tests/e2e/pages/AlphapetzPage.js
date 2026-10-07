// @ts-check
import { expect } from '@playwright/test';

/**
 * Page Object Model for Alphapetz Pet Clinic & E-Commerce Platform
 * Encapsulates page logic, locators, and user interactions following Playwright Principles.
 */
export class AlphapetzPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Header & Navigation
    this.brandHomeLink = page.locator('#brandHomeLink');
    this.navBtns = page.locator('.portal-nav .nav-btn');
    this.shopNavBtn = page.locator('.portal-nav .nav-btn[data-target="storeSection"]');
    this.vetNavBtn = page.locator('.portal-nav .nav-btn[data-target="vetBookingSection"]');
    this.groomingNavBtn = page.locator('.portal-nav .nav-btn[data-target="groomingSection"]');
    this.passportNavBtn = page.locator('.portal-nav .nav-btn[data-target="passportSection"]');
    this.petProfileBtn = page.locator('#petProfileBtn');
    this.openCartBtn = page.locator('#openCartBtn');
    this.cartCountBadge = page.locator('#cartCountBadge');
    this.cartTotalHeader = page.locator('#cartTotalHeader');
    this.erHotline = page.locator('.er-hotline');

    // Dedicated Search Row & Trending Chips
    this.searchInput = page.locator('#searchInput');
    this.clearSearchBtn = page.locator('#clearSearchBtn');
    this.trendingTagChips = page.locator('.trending-tags-row .tag-chip');

    // Banner Carousel
    this.bannerSlider = page.locator('#bannerSlider');
    this.bannerPrevBtn = page.locator('#bannerPrevBtn');
    this.bannerNextBtn = page.locator('#bannerNextBtn');
    this.carouselDots = page.locator('#carouselDots .dot-btn');
    this.bannerSlides = page.locator('.banner-slide');
    this.bannerCtas = page.locator('.btn-slide-cta');

    // Quick Services Rail
    this.quickCategoryItems = page.locator('.quick-category-item');
    this.quickDogFood = page.locator('.quick-category-item[data-category="dog-food"]');
    this.quickCatFood = page.locator('.quick-category-item[data-category="cat-food"]');
    this.quickPharmacy = page.locator('.quick-category-item[data-category="pharmacy"]');
    this.quickGrooming = page.locator('.quick-category-item[data-action="scroll-grooming"]');
    this.quickVet = page.locator('.quick-category-item[data-action="scroll-vet"]');
    this.quickPassport = page.locator('.quick-category-item[data-action="scroll-passport"]');

    // Hero Pet Alert
    this.quickVaccineBookingBtn = page.locator('#quickVaccineBookingBtn');

    // Store Section & Category Filters
    this.storeSection = page.locator('#storeSection');
    this.filterChips = page.locator('.filter-chip');
    this.resetFiltersBtn = page.locator('#resetFiltersBtn');
    this.productCards = page.locator('.product-card');
    this.addToCartBtns = page.locator('.btn-add-cart');

    // Cart Drawer
    this.cartDrawer = page.locator('#cartDrawer');
    this.closeCartBtn = page.locator('#closeCartBtn');
    this.promoInput = page.locator('#promoInput');
    this.applyPromoBtn = page.locator('#applyPromoBtn');
    this.promoMessage = page.locator('#promoMessage');
    this.proceedToCheckoutBtn = page.locator('#proceedToCheckoutBtn');
    this.cartStepperBtns = page.locator('.cart-stepper-btn');
    this.cartRemoveBtns = page.locator('.cart-item-remove');

    // Checkout Modal
    this.checkoutModal = page.locator('#checkoutModal');
    this.closeCheckoutBtn = page.locator('#closeCheckoutBtn');
    this.checkoutFormStep = page.locator('#checkoutFormStep');
    this.checkoutSuccessStep = page.locator('#checkoutSuccessStep');
    this.checkoutSubmitBtn = page.locator('#checkoutOrderForm button[type="submit"]');
    this.returnToShopBtn = page.locator('#returnToShopBtn');
    this.payUpiRadio = page.locator('input[name="payMethod"][value="upi"]');
    this.payCodRadio = page.locator('input[name="payMethod"][value="cod"]');

    // Quick View Modal
    this.quickModal = page.locator('#quickModal');
    this.closeQuickBtn = page.locator('#closeQuickBtn');

    // Booking Wizard
    this.serviceOptions = page.locator('.service-option');
    this.dateChips = page.locator('.date-chip');
    this.slotBtns = page.locator('.slot-btn:not(.disabled)');
    this.confirmBookingBtn = page.locator('#confirmBookingBtn');

    // Grooming CTA Buttons
    this.groomingPastelBtns = page.locator('.btn-pastel-add');

    // Pet Passport
    this.editVitalsBtn = page.locator('#editVitalsBtn');
    this.passportTabBtns = page.locator('.passport-tab-btn');
    this.downloadPassportBtn = page.locator('#downloadPassportBtn');
  }

  async goto() {
    await this.page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  }
}
