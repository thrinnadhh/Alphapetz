// ==========================================================================
// Alphapetz Pet Clinic & E-Commerce Platform — Core Application Logic
// Sea Breeze Palette Architecture (#00796B, #4DB6AC, #B2EBE2, #E0F7FA, #023047)
// ==========================================================================

// Product Catalog Database
const PRODUCTS = [
  {
    id: "p1",
    title: "Royal Canin Maxi Puppy Dry Food",
    category: "dog-food",
    categoryLabel: "Dog Nutrition",
    price: 3150,
    originalPrice: 3500,
    rating: 4.9,
    reviews: 428,
    badge: "Bestseller",
    badgeType: "bestseller",
    icon: "🍖",
    variants: ["4 kg", "10 kg", "15 kg"],
    desc: "Complete nutrition specifically formulated for large breed puppies (adult weight 26-44kg) up to 15 months old. Promotes digestive health and optimal bone growth."
  },
  {
    id: "p2",
    title: "Farmina N&D Grain-Free Pumpkin & Lamb",
    category: "dog-food",
    categoryLabel: "Grain-Free Diet",
    price: 2450,
    originalPrice: 2790,
    rating: 5.0,
    reviews: 192,
    badge: "Vet Approved",
    badgeType: "vet",
    icon: "🥩",
    variants: ["2.5 kg", "7 kg"],
    desc: "Italian cold-infusion recipe with 96% animal protein. Low glycemic index, zero artificial preservatives, ideal for dogs with grain sensitivities."
  },
  {
    id: "p3",
    title: "NexGard Chewable Flea & Tick Tab",
    category: "pharmacy",
    categoryLabel: "Veterinary Rx",
    price: 850,
    originalPrice: 950,
    rating: 4.8,
    reviews: 512,
    badge: "Rx Required",
    badgeType: "rx",
    icon: "💊",
    variants: ["10-25 kg", "25-50 kg"],
    desc: "Beef-flavored chewable tablet killing adult fleas and ticks for 30 consecutive days. Prescribed by Alphapetz senior veterinarians."
  },
  {
    id: "p4",
    title: "Himalaya Scavon Herbal Wound Spray",
    category: "pharmacy",
    categoryLabel: "First Aid & Wound Care",
    price: 160,
    originalPrice: 175,
    rating: 4.7,
    reviews: 640,
    badge: "Herbal Care",
    badgeType: "vet",
    icon: "🧴",
    variants: ["100 ml"],
    desc: "Antibacterial, antifungal, and fly-repellent wound dressing spray prepared with holy basil and eucalyptus extracts."
  },
  {
    id: "p5",
    title: "Whiskas Ocean Fish Adult Cat Food",
    category: "cat-food",
    categoryLabel: "Cat Nutrition",
    price: 410,
    originalPrice: 450,
    rating: 4.8,
    reviews: 310,
    badge: "Bestseller",
    badgeType: "bestseller",
    icon: "🐟",
    variants: ["1.2 kg", "3 kg"],
    desc: "Enriched with Omega 3 & 6, zinc for healthy fur, plus essential taurine and vitamin A to protect feline eyesight."
  },
  {
    id: "p6",
    title: "Royal Canin Second Age Kitten Dry Food",
    category: "cat-food",
    categoryLabel: "Kitten Care",
    price: 1850,
    originalPrice: 2050,
    rating: 4.9,
    reviews: 142,
    badge: "Vet Approved",
    badgeType: "vet",
    icon: "🐱",
    variants: ["2 kg", "4 kg"],
    desc: "Specially tailored kibble size for young kittens from 4 to 12 months. Reinforced with antioxidants and vitamin E."
  },
  {
    id: "p7",
    title: "Alphapetz Chlorhexidine Antifungal Shampoo",
    category: "grooming",
    categoryLabel: "Medicated Grooming 🩷",
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviews: 218,
    badge: "Spa Therapy 🩷",
    badgeType: "grooming",
    icon: "🫧",
    variants: ["250 ml", "500 ml"],
    desc: "Clinical veterinary grade 2% Chlorhexidine + 2% Ketoconazole for active relief from yeast, dermatitis, and fungal dandruff."
  },
  {
    id: "p8",
    title: "Pet Head Sensitive Soul Coconut Shampoo",
    category: "grooming",
    categoryLabel: "Salon Spa 🩷",
    price: 750,
    originalPrice: 850,
    rating: 4.8,
    reviews: 164,
    badge: "Hypoallergenic",
    badgeType: "grooming",
    icon: "🥥",
    variants: ["300 ml"],
    desc: "Infused with coconut oil, aloe vera, and marula oil to gently moisturize delicate skin without stripping essential natural oils."
  },
  {
    id: "p9",
    title: "Cosequin Max Strength Joint Supplements",
    category: "supplements",
    categoryLabel: "Mobility & Cartilage",
    price: 1890,
    originalPrice: 2100,
    rating: 5.0,
    reviews: 185,
    badge: "Vet Recommended",
    badgeType: "vet",
    icon: "🦴",
    variants: ["60 Chewable Tabs"],
    desc: "Glucosamine Hydrochloride and Sodium Chondroitin Sulfate formula supporting active joint cartilage in aging and sporting dogs."
  },
  {
    id: "p10",
    title: "Drools Absolute Calcium Sausage Bone Treats",
    category: "supplements",
    categoryLabel: "Treats & Bones",
    price: 320,
    originalPrice: 380,
    rating: 4.6,
    reviews: 490,
    badge: "Dental Health",
    badgeType: "bestseller",
    icon: "🍖",
    variants: ["Pack of 30"],
    desc: "High-protein dental chew treats fortified with calcium and phosphorus to strengthen teeth and jaw muscles."
  },
  {
    id: "p11",
    title: "Bravecto 3-Month Long-Acting Flea Chew",
    category: "pharmacy",
    categoryLabel: "Veterinary Rx",
    price: 1650,
    originalPrice: 1800,
    rating: 4.9,
    reviews: 280,
    badge: "Rx Required",
    badgeType: "rx",
    icon: "🛡️",
    variants: ["10-20 kg", "20-40 kg"],
    desc: "Single tasty chew providing 12 weeks of continuous protection against paralysis ticks, brown dog ticks, and fleas."
  },
  {
    id: "p12",
    title: "Cat Litter Odor-Lock Lavender Scent",
    category: "cat-food",
    categoryLabel: "Hygiene & Litter",
    price: 680,
    originalPrice: 790,
    rating: 4.7,
    reviews: 320,
    badge: "Fast Clumping",
    badgeType: "bestseller",
    icon: "📦",
    variants: ["10 kg"],
    desc: "99.9% dust-free 100% natural sodium bentonite clay that instantly forms tight clumps and neutralizes ammonia odors."
  }
];

// App State
let state = {
  cart: [
    {
      id: "p1",
      title: "Royal Canin Maxi Puppy Dry Food",
      price: 3150,
      quantity: 1,
      icon: "🍖",
      variant: "4 kg"
    }
  ],
  activeCategory: "all",
  searchQuery: "",
  activePromo: null,
  promoDiscountPct: 0,
  deliverySpeed: "express",
  selectedService: {
    name: "Comprehensive Health Check + Consult",
    price: 499
  },
  selectedSlot: "Today, Oct 7 @ 09:30 AM"
};

// DOM References
const productsGrid = document.getElementById("productsGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const filterStatusRow = document.getElementById("filterStatusRow");
const filterStatusQuery = document.getElementById("filterStatusQuery");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Cart Elements
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartTotalHeader = document.getElementById("cartTotalHeader");
const cartItemsCountLabel = document.getElementById("cartItemsCountLabel");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotalText = document.getElementById("cartSubtotalText");
const cartDeliveryText = document.getElementById("cartDeliveryText");
const cartGrandTotalText = document.getElementById("cartGrandTotalText");
const discountRow = document.getElementById("discountRow");
const cartDiscountText = document.getElementById("cartDiscountText");
const shippingProgressText = document.getElementById("shippingProgressText");
const shippingProgressFill = document.getElementById("shippingProgressFill");
const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMessage = document.getElementById("promoMessage");

// Checkout Modal Elements
const checkoutModal = document.getElementById("checkoutModal");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const checkoutOrderForm = document.getElementById("checkoutOrderForm");
const checkoutFormStep = document.getElementById("checkoutFormStep");
const checkoutSuccessStep = document.getElementById("checkoutSuccessStep");
const modalPayableTotal = document.getElementById("modalPayableTotal");
const returnToShopBtn = document.getElementById("returnToShopBtn");
const successOrderId = document.getElementById("successOrderId");
const successPayMode = document.getElementById("successPayMode");

// Quick View Modal
const quickModal = document.getElementById("quickModal");
const quickBackdrop = document.getElementById("quickBackdrop");
const closeQuickBtn = document.getElementById("closeQuickBtn");
const quickModalContent = document.getElementById("quickModalContent");

// Toast
const toastContainer = document.getElementById("toastContainer");

// Booking Elements
const serviceSelector = document.getElementById("serviceSelector");
const dateChips = document.getElementById("dateChips");
const morningSlots = document.getElementById("morningSlots");
const eveningSlots = document.getElementById("eveningSlots");
const summaryServiceName = document.getElementById("summaryServiceName");
const summarySlotTime = document.getElementById("summarySlotTime");
const summaryServiceFee = document.getElementById("summaryServiceFee");
const confirmBookingBtn = document.getElementById("confirmBookingBtn");
const quickVaccineBookingBtn = document.getElementById("quickVaccineBookingBtn");

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  setupEventListeners();
});

// ==========================================================================
// Product Rendering & Filtering
// ==========================================================================
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchesCategory = state.activeCategory === "all" || p.category === state.activeCategory;
    const query = state.searchQuery.trim().toLowerCase();
    const matchesQuery = !query || 
      p.title.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px solid var(--border-color);">
        <div style="font-size: 48px; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--dark-text); margin-bottom: 8px;">No matching pet supplies found</h3>
        <p style="color: var(--slate-muted); font-size: 14px; margin-bottom: 20px;">Try searching for a different food brand, medicine, or reset the filters.</p>
        <button class="btn-primary" onclick="resetFilters()">View All Products</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const cartItem = state.cart.find(item => item.id === p.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-badges">
          <span class="p-badge ${p.badgeType}">${p.badge}</span>
        </div>

        <div class="product-img-box" onclick="openQuickView('${p.id}')">
          <span>${p.icon}</span>
          <button class="quick-view-overlay-btn">Quick View</button>
        </div>

        <span class="product-category-tag">${p.categoryLabel}</span>
        <h4 class="product-title" onclick="openQuickView('${p.id}')" style="cursor: pointer;">${p.title}</h4>

        <div class="product-rating">
          <span class="rating-stars">★ ${p.rating.toFixed(1)}</span>
          <span>(${p.reviews} reviews)</span>
        </div>

        <div class="variant-selector">
          ${p.variants.map((v, i) => `
            <button class="variant-btn ${i === 0 ? 'active' : ''}">${v}</button>
          `).join('')}
        </div>

        <div class="product-bottom-row">
          <div class="price-box">
            <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>
          </div>

          <div class="cta-box">
            ${inCartQty > 0 ? `
              <div class="cart-stepper">
                <button class="stepper-btn" onclick="updateCartQuantity('${p.id}', -1)">−</button>
                <span class="stepper-val">${inCartQty}</span>
                <button class="stepper-btn" onclick="updateCartQuantity('${p.id}', 1)">+</button>
              </div>
            ` : `
              <button class="btn-add-cart" onclick="addToCart('${p.id}')">
                + Add
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// Cart State Management & Calculations
// ==========================================================================
function addToCart(productId, qty = 1, customItem = null) {
  if (customItem) {
    const existing = state.cart.find(i => i.id === customItem.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      state.cart.push({ ...customItem, quantity: qty });
    }
    showToast(`Added ${customItem.title} to cart!`, "🛒");
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: qty,
        icon: product.icon,
        variant: product.variants[0]
      });
    }
    showToast(`Added ${product.title} to cart!`, "🛒");
  }

  renderCart();
  renderProducts();
}

function updateCartQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(i => i.id === productId);
  if (itemIndex === -1) return;

  state.cart[itemIndex].quantity += delta;
  if (state.cart[itemIndex].quantity <= 0) {
    state.cart.splice(itemIndex, 1);
    showToast("Item removed from cart.", "🗑️");
  }

  renderCart();
  renderProducts();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  showToast("Item removed from cart.", "🗑️");
  renderCart();
  renderProducts();
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = Math.round(subtotal * state.promoDiscountPct);
  const delivery = subtotal >= 499 || subtotal === 0 ? 0 : 49;
  const total = Math.max(0, subtotal - discount + delivery);
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return { subtotal, discount, delivery, total, totalItems };
}

function renderCart() {
  const { subtotal, discount, delivery, total, totalItems } = calculateCartTotals();

  // Header badges
  cartCountBadge.textContent = totalItems;
  cartTotalHeader.textContent = `₹${total.toLocaleString('en-IN')}`;
  cartItemsCountLabel.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

  // Free shipping progress bar
  const target = 499;
  if (subtotal >= target || totalItems === 0) {
    shippingProgressFill.style.width = "100%";
    shippingProgressText.innerHTML = `🎉 You have unlocked <strong>FREE 45-Min Express Delivery</strong>!`;
  } else {
    const diff = target - subtotal;
    const pct = Math.min(100, Math.round((subtotal / target) * 100));
    shippingProgressFill.style.width = `${pct}%`;
    shippingProgressText.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for <strong>FREE 45-Min Express Delivery</strong>!`;
  }

  // Cart item rows
  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Explore prescription pet food, supplements, or book a doctor appointment!</p>
      </div>
    `;
    proceedToCheckoutBtn.disabled = true;
  } else {
    proceedToCheckoutBtn.disabled = false;
    cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-img">${item.icon}</div>
        <div class="cart-item-details">
          <h5 class="cart-item-title">${item.title}</h5>
          ${item.variant ? `<div style="font-size: 11px; color: var(--slate-muted);">${item.variant}</div>` : ''}
          <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-stepper">
            <button class="stepper-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
            <span class="stepper-val">${item.quantity}</span>
            <button class="stepper-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove">✕</button>
        </div>
      </div>
    `).join('');
  }

  // Price breakdown
  cartSubtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  if (discount > 0) {
    discountRow.style.display = "flex";
    cartDiscountText.textContent = `-₹${discount.toLocaleString('en-IN')}`;
  } else {
    discountRow.style.display = "none";
  }

  cartDeliveryText.textContent = delivery === 0 ? "FREE" : `₹${delivery}`;
  cartGrandTotalText.textContent = `₹${total.toLocaleString('en-IN')}`;
  modalPayableTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  
  // Category filter chips
  categoryFilters.addEventListener("click", e => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;

    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    state.activeCategory = chip.dataset.category;
    updateFilterStatusRow();
    renderProducts();
  });

  // Search input live filtering
  searchInput.addEventListener("input", e => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    updateFilterStatusRow();
    renderProducts();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    updateFilterStatusRow();
    renderProducts();
  });

  resetFiltersBtn.addEventListener("click", resetFilters);

  // Cart Drawer open/close
  openCartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    cartBackdrop.classList.add("active");
  });

  closeCartBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  // Apply promo code
  applyPromoBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === "SEABREEZE") {
      state.activePromo = "SEABREEZE";
      state.promoDiscountPct = 0.10; // 10%
      promoMessage.className = "promo-msg success";
      promoMessage.textContent = "✓ Coupon SEABREEZE applied! 10% discount added.";
      showToast("Coupon SEABREEZE applied! -10% OFF", "🎉");
      renderCart();
    } else {
      promoMessage.className = "promo-msg error";
      promoMessage.textContent = "✕ Invalid promo code. Try 'SEABREEZE'.";
    }
  });

  // Proceed to Checkout
  proceedToCheckoutBtn.addEventListener("click", () => {
    closeCart();
    checkoutFormStep.style.display = "block";
    checkoutSuccessStep.style.display = "none";
    checkoutModal.classList.add("active");
  });

  closeCheckoutBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });
  checkoutBackdrop.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Order Submission
  checkoutOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderNum = "ALP-" + Math.floor(100000 + Math.random() * 900000);
    successOrderId.textContent = orderNum;
    
    const payRadio = document.querySelector('input[name="payMethod"]:checked');
    successPayMode.textContent = payRadio.value === "upi" ? "Instant UPI (Verified)" : "Cash on Delivery";

    checkoutFormStep.style.display = "none";
    checkoutSuccessStep.style.display = "block";

    // Clear cart
    state.cart = [];
    renderCart();
    renderProducts();
    showToast("Order dispatched via Rapido Fleet!", "🚀");
  });

  returnToShopBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Quick View Close
  closeQuickBtn.addEventListener("click", () => {
    quickModal.classList.remove("active");
  });
  quickBackdrop.addEventListener("click", () => {
    quickModal.classList.remove("active");
  });

  // Booking Service Selection
  serviceSelector.addEventListener("click", e => {
    const option = e.target.closest(".service-option");
    if (!option) return;

    document.querySelectorAll(".service-option").forEach(o => o.classList.remove("selected"));
    option.classList.add("selected");
    option.querySelector("input").checked = true;

    state.selectedService = {
      name: option.querySelector(".service-name").textContent,
      price: parseInt(option.dataset.price)
    };

    summaryServiceName.textContent = state.selectedService.name;
    summaryServiceFee.textContent = `₹${state.selectedService.price}`;
  });

  // Date Chip Selection
  dateChips.addEventListener("click", e => {
    const chip = e.target.closest(".date-chip");
    if (!chip) return;

    document.querySelectorAll(".date-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    updateBookingSummary();
  });

  // Time Slot Selection
  [morningSlots, eveningSlots].forEach(container => {
    container.addEventListener("click", e => {
      const btn = e.target.closest(".slot-btn");
      if (!btn || btn.classList.contains("disabled")) return;

      document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      updateBookingSummary();
    });
  });

  // Confirm Booking CTA
  confirmBookingBtn.addEventListener("click", () => {
    const activeDateChip = document.querySelector(".date-chip.active");
    const activeSlotBtn = document.querySelector(".slot-btn.active");
    const slotString = `${activeDateChip.dataset.date} @ ${activeSlotBtn.dataset.time}`;

    const bookingItem = {
      id: "booking-" + Date.now(),
      title: `Vet Appointment: ${state.selectedService.name}`,
      price: state.selectedService.price,
      icon: "🩺",
      variant: slotString
    };

    addToCart(null, 1, bookingItem);
    cartDrawer.classList.add("active");
    cartBackdrop.classList.add("active");
  });

  // Quick Vaccine Booking CTA on Alert Card
  if (quickVaccineBookingBtn) {
    quickVaccineBookingBtn.addEventListener("click", () => {
      const vaccineItem = {
        id: "vaccine-booster-" + Date.now(),
        title: "Anti-Rabies Booster Vaccine (Bruno)",
        price: 299,
        icon: "💉",
        variant: "Appointment with Dr. S. Rao (KT Road)"
      };
      addToCart(null, 1, vaccineItem);
      cartDrawer.classList.add("active");
      cartBackdrop.classList.add("active");
    });
  }

  // Grooming Package CTA Buttons
  document.querySelectorAll(".btn-pastel-add").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const itemKey = e.target.dataset.item;
      let groomingItem;
      if (itemKey === "grooming-bath") {
        groomingItem = {
          id: "grooming-bath",
          title: "Hydrotherapy Bath & Dry (Bruno)",
          price: 699,
          icon: "🫧",
          variant: "Alphapetz Paws & Bubbles Spa"
        };
      } else if (itemKey === "grooming-royal") {
        groomingItem = {
          id: "grooming-royal",
          title: "Full Royal Grooming Makeover (Bruno)",
          price: 1299,
          icon: "🩷",
          variant: "Breed-Specific Styling & Spa"
        };
      } else {
        groomingItem = {
          id: "grooming-medicated",
          title: "Medicated Antifungal Spa Therapy",
          price: 999,
          icon: "🧴",
          variant: "Prescription Soak + Barrier Serum"
        };
      }
      addToCart(null, 1, groomingItem);
      cartDrawer.classList.add("active");
      cartBackdrop.classList.add("active");
    });
  });

  // Navigation Links Active State
  document.querySelectorAll(".portal-nav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".portal-nav .nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Promotional Banner Carousel Controller
  const bannerSlider = document.getElementById("bannerSlider");
  const bannerPrevBtn = document.getElementById("bannerPrevBtn");
  const bannerNextBtn = document.getElementById("bannerNextBtn");
  const dotBtns = document.querySelectorAll("#carouselDots .dot-btn");
  const bannerSlides = document.querySelectorAll(".banner-slide");
  const totalSlides = bannerSlides.length || 4;
  let currentSlide = 0;
  let bannerTimer = null;

  function updateSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    if (bannerSlider) {
      bannerSlider.style.transform = `translateX(-${(currentSlide * 100) / totalSlides}%)`;
    }
    bannerSlides.forEach((s, i) => {
      s.classList.toggle("active", i === currentSlide);
    });
    dotBtns.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function startBannerAutoSlide() {
    stopBannerAutoSlide();
    bannerTimer = setInterval(() => {
      updateSlide(currentSlide + 1);
    }, 4800);
  }

  function stopBannerAutoSlide() {
    if (bannerTimer) {
      clearInterval(bannerTimer);
      bannerTimer = null;
    }
  }

  if (bannerPrevBtn && bannerNextBtn) {
    bannerPrevBtn.addEventListener("click", () => {
      updateSlide(currentSlide - 1);
      startBannerAutoSlide();
    });
    bannerNextBtn.addEventListener("click", () => {
      updateSlide(currentSlide + 1);
      startBannerAutoSlide();
    });
  }

  dotBtns.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.index, 10);
      updateSlide(idx);
      startBannerAutoSlide();
    });
  });

  if (bannerSlider) {
    const wrapper = bannerSlider.closest(".carousel-wrapper");
    if (wrapper) {
      wrapper.addEventListener("mouseenter", stopBannerAutoSlide);
      wrapper.addEventListener("mouseleave", startBannerAutoSlide);
    }

    // Touch swipe support on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    bannerSlider.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopBannerAutoSlide();
    }, { passive: true });

    bannerSlider.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        // Swiped left -> next
        updateSlide(currentSlide + 1);
      } else if (touchEndX - touchStartX > 45) {
        // Swiped right -> prev
        updateSlide(currentSlide - 1);
      }
      startBannerAutoSlide();
    }, { passive: true });
  }

  startBannerAutoSlide();

  // Trending Tag Chips in Search Bar Row
  document.querySelectorAll(".trending-tags-row .tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.dataset.search || chip.textContent.trim();
      searchInput.value = query;
      state.searchQuery = query;
      clearSearchBtn.style.display = "block";
      updateFilterStatusRow();
      renderProducts();
      const storeSection = document.getElementById("storeSection");
      if (storeSection) {
        storeSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Quick Services & Categories Action Rail
  document.querySelectorAll(".quick-category-item").forEach(item => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      const action = item.dataset.action;

      if (category) {
        state.activeCategory = category;
        state.searchQuery = "";
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        document.querySelectorAll(".filter-chip").forEach(c => {
          c.classList.toggle("active", c.dataset.category === category);
        });
        updateFilterStatusRow();
        renderProducts();
        const storeSection = document.getElementById("storeSection");
        if (storeSection) {
          storeSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (action === "scroll-grooming") {
        document.getElementById("groomingSection")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "scroll-vet") {
        document.getElementById("vetBookingSection")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "scroll-passport") {
        document.getElementById("passportSection")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "call-er") {
        window.location.href = "tel:+919849073877";
      }
    });
  });

  // Edit Vitals Button
  const editVitalsBtn = document.getElementById("editVitalsBtn");
  if (editVitalsBtn) {
    editVitalsBtn.addEventListener("click", () => {
      const newWeight = prompt("Enter Bruno's latest weight in kg:", "28.4");
      if (newWeight && !isNaN(parseFloat(newWeight))) {
        document.querySelector(".vital-value").innerHTML = `${parseFloat(newWeight).toFixed(1)} kg <span class="vital-tag ok">Updated</span>`;
        showToast(`Bruno's weight updated to ${parseFloat(newWeight).toFixed(1)} kg!`, "✓");
      }
    });
  }
}

function updateBookingSummary() {
  const activeDateChip = document.querySelector(".date-chip.active");
  const activeSlotBtn = document.querySelector(".slot-btn.active");
  if (activeDateChip && activeSlotBtn) {
    state.selectedSlot = `${activeDateChip.dataset.date} @ ${activeSlotBtn.dataset.time}`;
    summarySlotTime.textContent = state.selectedSlot;
  }
}

function updateFilterStatusRow() {
  const hasCategory = state.activeCategory !== "all";
  const hasQuery = state.searchQuery.trim().length > 0;

  if (hasCategory || hasQuery) {
    filterStatusRow.style.display = "flex";
    const parts = [];
    if (hasCategory) parts.push(`Category: ${state.activeCategory}`);
    if (hasQuery) parts.push(`Query: "${state.searchQuery}"`);
    filterStatusQuery.textContent = parts.join(" • ");
  } else {
    filterStatusRow.style.display = "none";
  }
}

function resetFilters() {
  state.activeCategory = "all";
  state.searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  document.querySelectorAll(".filter-chip").forEach(c => {
    c.classList.toggle("active", c.dataset.category === "all");
  });
  updateFilterStatusRow();
  renderProducts();
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartBackdrop.classList.remove("active");
}

// Quick View Modal
window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  quickModalContent.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-img">${product.icon}</div>
      <div>
        <span class="product-category-tag">${product.categoryLabel}</span>
        <h3 style="font-family:'Plus Jakarta Sans'; font-size:20px; font-weight:800; color:var(--dark-text); margin-bottom:8px;">${product.title}</h3>
        <div style="font-size:13px; color:#F59E0B; margin-bottom:12px;">★ ${product.rating.toFixed(1)} (${product.reviews} verified customer reviews)</div>
        <p style="font-size:14px; color:var(--slate-muted); line-height:1.5; margin-bottom:18px;">${product.desc}</p>
        
        <div style="margin-bottom:16px;">
          <strong style="font-size:12px; display:block; margin-bottom:6px;">Available Package Sizes:</strong>
          <div class="variant-selector">
            ${product.variants.map((v, i) => `<button class="variant-btn ${i === 0 ? 'active' : ''}">${v}</button>`).join('')}
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:16px; margin-top:20px;">
          <div>
            <div style="font-size:22px; font-weight:800; color:var(--dark-text);">₹${product.price.toLocaleString('en-IN')}</div>
            <div style="font-size:12px; color:#94A3B8; text-decoration:line-through;">₹${product.originalPrice.toLocaleString('en-IN')}</div>
          </div>
          <button class="btn-primary" onclick="addToCart('${product.id}'); quickModal.classList.remove('active');">
            Add to Shopping Cart 🛒
          </button>
        </div>
      </div>
    </div>
  `;

  quickModal.classList.add("active");
};

// Toast Notifications
function showToast(message, icon = "✓") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Global Exports
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.resetFilters = resetFilters;
