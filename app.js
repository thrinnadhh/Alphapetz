// PetPulse & PetEase Showcase Interactive Controller

const SCREEN_DATA = {
  petease: {
    screen1: {
      code: "Screen 1",
      title: "Mobile Home & Pet Hub",
      viewport: "390px (Mobile PWA)",
      image: "assets/petease_screen1.png",
      summary: "Primary landing feed displaying real-time delivery and clinic location, active pet context, urgent health alarms, quick booking shortcuts, and breed-curated food/pharmacy.",
      features: [
        "Top Header Left: Delivery & clinic location selector with map pin showing 'Tirupati, AP ▾' with subtext 'Delivering in 30 mins'.",
        "Top Header Right: Active pet profile pill displaying circular dog avatar, 'Bruno (Lab 2y) ▾', with green status dot, plus notification bell with unread badge.",
        "Search Bar: Full-width rounded input with magnifying glass: 'Search Royal Canin, Vet consult, Flea shampoo...' with camera icon for prescription upload.",
        "Dynamic Health Alert Card: Soft amber/cream banner card with alert icon: 'Vaccine Due in 4 Days! Bruno\\'s Anti-Rabies booster is scheduled for Oct 10.' with green pill button 'Book Slot (₹499)'.",
        "Quick Services Carousel: Vet at Clinic (Stethoscope, Emerald), Home Grooming (Scissors/comb, Mint), Vaccinations (Syringe, Teal), Pet Pharmacy (Medicine bottle, Blue), Diet Consult (Bowl, Orange).",
        "Personalized Store Section: Header 'Recommended for Bruno (Large Puppy)' with 'View All →' link.",
        "Two-Column Product Cards: Royal Canin Maxi Puppy 4kg (4.8★, ₹3,150 strikethrough ₹3,500, '+ ADD' green outline button) & NexGard Chewable Flea/Tick Tab (₹850, '+ ADD' button).",
        "Fixed Bottom Navigation: 5 items with active indicator on 'Home' (Home, Bookings, Shop, Pet Passport, Profile)."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Palette": "Emerald Green (#059669), Mint Accent (#D1FAE5), Charcoal (#0F172A)",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen2: {
      code: "Screen 2",
      title: "Service Booking & Slot Selection",
      viewport: "390px (Mobile PWA)",
      image: "assets/petease_screen2.png",
      summary: "Frictionless mobile booking flow for In-Clinic Vet Consultations and grooming packages with interactive date chips and morning/evening slot matrix.",
      features: [
        "App Bar: Back arrow icon, title 'Book Vet Consultation', and clinic location chip: 'KT Road Clinic, Tirupati'.",
        "Active Pet Selection Banner: Horizontal card showing selected pet: Bruno (Labrador Retriever, 28kg) with 'Change Pet' text link.",
        "Service Details Summary: Clean white card with 'Comprehensive Health Check + General Consult', duration badge '⏱ 30 mins', description, and price '₹499'.",
        "Date Picker: Horizontal chip selector ('Today, Oct 6', 'Wed, Oct 7 [Selected - solid emerald green, bold white text]', 'Thu, Oct 8', 'Fri, Oct 9', 'Sat, Oct 10').",
        "Time Slot Grid: Morning Slots (09:30 AM, 10:15 AM [Selected], 11:00 AM, 11:45 AM) & Evening Slots (04:30 PM, 05:15 PM, 06:00 PM [Disabled - Booked], 06:45 PM).",
        "Doctor Preview: Small card showing 'Assigned: Dr. S. Rao, BVSc (Senior Veterinary Surgeon)' with 4.9★ badge.",
        "Fixed Sticky Bottom Checkout Bar: Left '₹499' ('Taxes included') and large green pill button 'Proceed to Details →'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "ClinicHeader, ServiceSummaryCard, DatePickerRail, TimeSlotMatrix, StickyFooterCTA",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen3: {
      code: "Screen 3",
      title: "Digital Pet Passport & Health Records",
      viewport: "390px (Mobile PWA)",
      image: "assets/petease_screen3.png",
      summary: "Medical-grade retention hub storing pet vital statistics, vaccination compliance timeline, and verifiable clinical health history.",
      features: [
        "App Bar: Title 'Digital Pet Passport', right icon for 'Add New Pet (+)'.",
        "Pet Profile Hero Card: Deep emerald card with circular photo of Bruno, 'Bruno (Male, Neutered)', 'Labrador Retriever • 2 Years 3 Months', translucent pills ('Weight: 28.4 kg', 'Blood: DEA 1.1+', 'Microchip: #9810-TIR'), and 'Edit Vitals ✏️'.",
        "Segmented Tab Bar: 3 flat tabs: 'Vaccines (Active)', 'Prescriptions', 'Lab Reports'.",
        "Vaccination Timeline: Connected status dots with Anti-Rabies Booster (Amber badge 'Due Soon', CTA 'Book Now'), DHPPiL 7-in-1 (Green checkmark 'Up to date', 'View Certificate PDF' link), Kennel Cough, and Deworming Cycle (Gray pending clock).",
        "Floating Action Button: Bottom right button '+ Upload Old Paper Record' with document scanner icon.",
        "Fixed Bottom Navigation: 5-tab bar with 'Pet Passport' highlighted in emerald green."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "PassportHeroCard, SegmentedRecordTabs, ConnectedTimeline, UploadScannerFAB",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen4: {
      code: "Screen 4",
      title: "Pet Food & Pharmacy E-Commerce Catalog",
      viewport: "390px (Mobile PWA)",
      image: "assets/petease_screen4.png",
      summary: "Mobile shopping view tailored by life stage, brand, and pet species with immediate cart access and 45-minute Rapido delivery.",
      features: [
        "Top Bar: Search input with filter button icon, cart icon on top right with red badge count '2'.",
        "Dynamic Pet Filter Chip Bar: '🐶 Filtered for: Adult Labrador ✕', 'Brand ▾', 'Dietary Needs ▾', 'Price Range ▾', 'In Stock in Tirupati' (Toggle switch).",
        "Category Horizontal Bubbles: 'Dry Food', 'Wet Food', 'Dental Treats', 'Supplements', 'Tick & Flea'.",
        "Product List: Farmina N&D Grain Free Pumpkin Lamb 2.5kg (Brand: FARMINA, size selector pills [2.5kg (Active)] [7kg] [12kg], price '₹2,690' strikethrough '₹2,990', tag '⚡ Fast Delivery by Rapido in 45 Mins', stepper '[ - 1 + ]') & Furminator Deshedding Tool ('₹1,450', '+ ADD').",
        "Floating View Cart Bar: Floating bottom strip above nav: '2 Items in Cart • ₹4,140' with right action 'View Cart 🛒 →'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "PetFilterBar, CategoryBubbleRail, ProductCardStepper, FloatingCartBar",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen5: {
      code: "Screen 5",
      title: "Unified Checkout (Products + Vet Slot)",
      viewport: "390px (Mobile PWA)",
      image: "assets/petease_screen5.png",
      summary: "Mobile checkout review screen combining physical goods delivery details with appointment time slot confirmation and payment method selection.",
      features: [
        "App Bar: Back button, title 'Order & Appointment Review'.",
        "Delivery Address Card: 'DELIVERING TO' Plot No. 42, Air Bypass Road, Tirupati - 517501 ('Change' link) with '⚡ Rapido Hyperlocal: Arriving today between 5:00 PM - 6:00 PM (₹29)'.",
        "Service Appointment Card: '🩺 Clinic Visit: Dr. S. Rao' • Wednesday, Oct 7 • 10:15 AM • PetEase Clinic, KT Road Branch, Tirupati.",
        "Order Items Collapsible List: Farmina N&D Dog Food 2.5kg (₹2,690) + Vet Consultation Fee In-Clinic (₹499).",
        "Bill Details Summary Card: Item Total ₹3,189, Delivery ₹29, Handling FREE, First Pet Discount -₹150, Final Total: '₹3,068' in bold 18px text.",
        "Payment Method Selector: UPI (Google Pay / PhonePe / Paytm - Pre-selected), Credit/Debit Card, Cash / Pay at Clinic.",
        "Sticky Pay CTA: Full-width button 'Pay ₹3,068 & Confirm Booking 🔒' with subtext '100% Safe Payments • Instant WhatsApp Receipt'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "DeliveryAddressCard, AppointmentCard, CollapsibleItemsList, BillSummaryCard, StickyPayCTA",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen6: {
      code: "Screen 6",
      title: "Live Order Tracking & GPS Telemetry",
      viewport: "390px (Mobile PWA)",
      image: "assets/screen_c6.png",
      summary: "Post-checkout live map tracking displaying real-time delivery rider progress, scooter GPS telemetry, and delivery OTP security.",
      features: [
        "Interactive Map View: Scooter pin with green pulse effect moving from Tirupati Main Hub to Air Bypass Road with ETA overlay ('Arriving in 14 Mins').",
        "Rider Profile Card: Rapido Delivery Partner Ramesh K. (4.9★, 1,240 drops), Hero Electric scooter, and direct 'Call Rider 📞' / 'Message 💬' actions.",
        "Order Status Stepper: Confirmed (4:15 PM) -> Packed & Sealed (4:24 PM) -> Out for Delivery (Active green dot, 4:32 PM) -> Delivered.",
        "Security OTP Card: 'Share OTP 4920 with rider upon arrival'.",
        "Bundled Appointment Reminder: 'Reminder: In-Clinic Vet Visit with Dr. S. Rao tomorrow at 10:15 AM (KT Road Clinic)'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "LiveGPSMapCard, RiderProfilePill, DeliveryOTPBadge, StatusStepper",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen7: {
      code: "Screen 7",
      title: "Pet Profile & Vitals Editor",
      viewport: "390px (Mobile PWA)",
      image: "assets/screen_c7.png",
      summary: "Comprehensive pet medical profile management updating weight records, allergies, microchip RFID, and dietary preferences.",
      features: [
        "Pet Avatar Card: High-resolution circular photo of Bruno the Golden Labrador with camera badge 'Change Photo'.",
        "Classification Inputs: Name input 'Bruno', breed 'Labrador Retriever', gender radio chips '[ Male (Neutered) ] [ Female ]'.",
        "Clinical Vitals: Weight '28.4 kg' with historical sparkline graph, DOB (June 15, 2024), Blood group 'DEA 1.1+', and microchip RFID barcode.",
        "Allergies & Nutrition Tags: Active chips for 'Chicken Protein ✕', 'Flea Bite Dermatitis ✕', and 'Grain Free [Selected]'.",
        "Sticky Action Bar: Full-width emerald pill button 'Save Vitals & Update Health Record →'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "PetAvatarUpload, HistoricalWeightSparkline, AllergyTagSelector, StickySaveCTA",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen_c8: {
      code: "Screen 8",
      title: "Product Detail Page (PDP) & Clinical Nutrition",
      viewport: "390px (Mobile PWA)",
      image: "assets/screen_c8.png",
      summary: "High-conversion product detail view with personalized clinical feeding dose calculators and 45-minute Rapido delivery guarantee.",
      features: [
        "Product Photography Gallery: High-resolution packaging images with 45-min Rapido delivery badge.",
        "Brand & Title: 'FARMINA PET FOODS' • N&D Grain Free Pumpkin, Lamb & Blueberry Adult Medium & Maxi Breed.",
        "Pricing & Discounts: '₹2,690' with strikethrough '₹2,990' (10% OFF) and countdown timer 'Order in 18 mins to get by 5:15 PM'.",
        "Pack Size Pills: '[ 2.5 kg (Active) ] [ 7 kg ] [ 12 kg ]'.",
        "Clinical Feeding Calculator: Tailored for Bruno (28.4 kg) -> '320g / day in 2 meals • Bag lasts ~8 days'.",
        "Vet Recommendation Card: Dr. S. Rao recommendation for sensitive skin and joint support.",
        "Sticky Action Bar: Stepper counter '[ - 1 + ]', total '₹2,690', and emerald 'Add to Cart 🛒' CTA."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "ProductImageGallery, PackSizeSelector, FeedingDoseCalculator, StickyCartFooter",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen_c9: {
      code: "Screen 9",
      title: "Video Tele-Consultation & Virtual Clinic Room",
      viewport: "390px (Mobile PWA)",
      image: "assets/screen_c9.png",
      summary: "Live encrypted veterinary tele-consultation room connecting pet parents directly with verified doctors, with in-call vitals overlay and live prescription drafting.",
      features: [
        "Split Video Feed: Attending vet Dr. S. Rao in consultation room with picture-in-picture stream of Priya and Bruno.",
        "Top Consultation Context: 'Live Vet Consult • 08:42' with Bruno's weight (28.4 kg) and active symptom notes.",
        "Live In-Call Doctor Ticker: 'Dr. Rao is preparing digital prescription...'.",
        "Floating In-Call Toolbar: Mute mic, flip camera, toggle video, in-call chat (unread badge), and end call button.",
        "Expandable Rx Drawer: 'Prescription in progress (2 medications added) • View Draft Rx 📄'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "WebRTCVideoGrid, TelehealthOverlay, InCallControlToolbar, RealTimeRxDrawer",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    },
    screen_c10: {
      code: "Screen 10",
      title: "Digital Prescription & Medical Records (Rx Locker)",
      viewport: "390px (Mobile PWA)",
      image: "assets/screen_c10.png",
      summary: "Medical-grade digital prescription issued by attending clinic doctors with one-click fulfillment and 45-minute Rapido delivery.",
      features: [
        "Clinical Header: PetEase Clinic KT Road Branch, Dr. S. Rao, BVSc & AH (Reg. No: AP-VC-8912).",
        "Patient & Diagnosis: Bruno (Labrador, 28.4 kg) • Diagnosis: 'Acute Allergic Dermatitis & Mild Otitis Externa'.",
        "Prescribed Medication Schedule: Apoquel 16mg (1 tab OD x 5d) + Otikfree Ear Drops (3 drops BD x 7d) + Farmina Sensitive Skin diet.",
        "Cryptographic Doctor Stamp: Digital signature seal with verified AP Veterinary Council QR code.",
        "One-Click Fulfillment: Sticky bottom card 'Prescribed Medications (2 items) • ₹1,480' with 'Buy Prescribed Meds (Rapido 45m Delivery) 🛒 →'."
      ],
      techSpecs: {
        "Platform": "PetEase",
        "Target Viewport": "390px Mobile Viewport",
        "Primary Component": "DigitalRxHeader, MedicationDosageTable, CryptoDoctorStamp, OneClickPharmacyCTA",
        "Stitch Model": "Gemini 3.8 Flash (Project: 14068042419867567264)"
      }
    }
  },
  customer: {
    c1: {
      code: "Screen C1",
      title: "Mobile Home & Pet Hub",
      viewport: "390px × 844px (Mobile PWA)",
      image: "assets/c1_mobile.png",
      summary: "Primary gateway for pet parents combining hyper-local delivery awareness, active pet context, clinical booster alarms, quick veterinary services, and breed-personalized commerce.",
      features: [
        "Sticky location chip: '📍 Tirupati, AP ▾ • 45 min delivery' with live green SLA pulse indicator.",
        "Active pet switcher pill with Labrador avatar: '🐶 Bruno (Labrador) ▾' and health vitals flag.",
        "Amber warning banner: 'Vaccine Due in 4 Days!' for Bruno's Anti-Rabies annual booster with direct 'Book Slot (₹499) →' button.",
        "Horizontal touch-snap services rail: 'Vet at Clinic', 'Home Grooming', 'Vaccinations', 'Pet Pharmacy', and 'Diet Consult'.",
        "Curated e-commerce grid for Bruno (Adult Labrador): Royal Canin Maxi Adult & NexGard Chewables with instant '+ ADD' buttons and Rapido 45m badges.",
        "Sticky bottom 5-tab navigation bar: Home (Active emerald), Bookings, Shop, Pet Passport, Profile."
      ],
      techSpecs: {
        "Target Viewport": "390px × 844px",
        "Primary Component": "PetContextBar, BoosterAlertCard, ServiceQuickRail, ProductCuratedGrid",
        "Data Source": "Supabase 'pets' + 'vaccination_schedules' + 'inventory_local'",
        "Design Token": "Brand Primary (#059669), Mint (#D1FAE5), Amber Warning (#FFFBEB)"
      }
    },
    c2: {
      code: "Screen C2",
      title: "Interactive Vet & Grooming Slot Booking",
      viewport: "390px × 844px (Mobile PWA)",
      image: "assets/c2_mobile.png",
      summary: "Streamlined medical appointment booking allowing parents to select clinical consults, doorstep visits, or tele-triage with credentialed veterinary doctors.",
      features: [
        "Sticky top navigation with clinic selector: 'KT Road Clinic, Tirupati ▾' in a light sage chip.",
        "Bruno's vitals context strip: 28.4 kg, 3 years, Male, Anti-Rabies Booster Due flag.",
        "Consultation type radio chips: 'In-Clinic Consult' (₹499 Selected), 'Video Tele-Consult' (₹299), 'Home Vet Visit' (₹799).",
        "Verified vet profile card: Dr. S. Rao, BVSc & AH (12 yrs experience, 4.9★ rating, 'Available Today at KT Road').",
        "Horizontal date selector pills with active emerald highlight and booster due indicators.",
        "Segmented time slot matrix (Morning 9:30 AM - 1:00 PM & Evening 4:30 PM - 8:30 PM) with disabled states for booked slots.",
        "Sticky bottom price breakdown ('₹499 incl. taxes') and full-width 'Confirm Slot →' action."
      ],
      techSpecs: {
        "Target Viewport": "390px × 844px",
        "Primary Component": "SlotMatrix, VetDoctorCard, DateScrollRail, StickyPriceFooter",
        "Data Source": "Supabase 'doctors' + 'clinic_slots' + 'appointments'",
        "Design Token": "Selected Mint Border (#059669), Slate Base (#0F172A)"
      }
    },
    c3: {
      code: "Screen C3",
      title: "Digital Pet Passport & Medical Records",
      viewport: "390px × 844px (Mobile PWA)",
      image: "assets/c3_mobile.png",
      summary: "Comprehensive digital medical locker and government-compliant pet identity document, replacing paper vaccine booklets with cryptographically verified digital records.",
      features: [
        "Pet Identity Hero Card: High-resolution portrait of Bruno, breed classification, age (3y 2m), microchip RFID (IND-982-004-912), and 'Edit Vitals' trigger.",
        "Segmented clinical tabs: 'Vaccinations (Active)', 'Prescriptions & Rx', 'Lab Reports & Bloodwork'.",
        "Connected vertical timeline with status-colored nodes: Overdue alert (Amber) for Anti-Rabies, completed immunizations (Green check) for DHPPiL and Bordetella.",
        "Direct action on completed vaccines: 'Download Verified PDF Certificate 📄' hosted on Cloudflare R2.",
        "Floating action button (FAB): Emerald '+ Upload Record / Rx' supporting camera OCR scan of paper vet documents.",
        "Persistent bottom navigation keeping Pet Passport tab active."
      ],
      techSpecs: {
        "Target Viewport": "390px × 844px",
        "Primary Component": "PetPassportHeroCard, MedicalTimeline, CertificateViewerModal, ScanFAB",
        "Storage": "Cloudflare R2 for medical PDFs and high-res pet portraits",
        "Design Token": "Success Green (#10B981), Warning Amber (#F59E0B), Sage Canvas (#F0FDF4)"
      }
    },
    c4: {
      code: "Screen C4",
      title: "Pet Food & Pharmacy E-Commerce Catalog",
      viewport: "390px × 844px (Mobile PWA)",
      image: "assets/c4_mobile.png",
      summary: "Hyperlocal commerce catalog optimized for fast conversion, showing accurate live stock in the Tirupati Hub and 45-minute Rapido delivery availability.",
      features: [
        "Top sticky search bar with delivery ETA chip: '⚡ Deliver to KT Road, Tirupati in 45 mins'.",
        "Dynamic active filter pills: 'Filtered for: Adult Dogs ✕', 'Brand: Royal Canin ✕', 'In Stock in Tirupati'.",
        "Visual category rail: Dry Food, Wet Food, Pharmacy & Rx, Grooming Care, Supplements.",
        "Rich product cards: Royal Canin Maxi Adult (7kg) and NexGard Chewables with variant pills (2.5kg, 7kg, 12kg), strikethrough MRP, and inline quantity steppers [ - 1 + ].",
        "Rx Verified badge on veterinary prescription drugs preventing unauthorized checkout.",
        "Persistent floating cart drawer: '2 Items | ₹3,340' with one-click 'View Cart 🛒 →' trigger."
      ],
      techSpecs: {
        "Target Viewport": "390px × 844px",
        "Primary Component": "SearchFilterRail, ProductCardStepper, FloatingCartDrawer",
        "Data Source": "Supabase 'store_inventory' + 'products' + 'product_variants'",
        "Design Token": "Pill Buttons (rounded-full), Price Discount Tag (#EF4444)"
      }
    },
    c5: {
      code: "Screen C5",
      title: "Unified Checkout & Real-Time Tracking",
      viewport: "390px × 844px (Mobile PWA)",
      image: "assets/c5_mobile.png",
      summary: "Unified transaction reconciliation bundling physical pharmacy items and clinic appointments, backed by live Rapido rider GPS telemetry and status progression.",
      features: [
        "Delivery Mode toggle: '⚡ Local Hyperlocal (Rapido - 45 mins)' vs 'Standard Courier (Shiprocket - 2-3 Days)'.",
        "Delivery address selector: 'Priya Sharma • Flat 302, Sri Sai Nilayam, KT Road, Tirupati'.",
        "Combined order cart: Royal Canin food (₹2,450) + NexGard (₹890) + Clinic Consult slot with Dr. S. Rao (₹499) = ₹3,839 total.",
        "Real-time status progression stepper: Confirmed -> Packed -> Out for Delivery (Active) -> Delivered.",
        "Live route map card: Telemetry from Tirupati Main Hub to KT Road with rider badge ('Ramesh K. • 4.9★') and direct 'Call Rider 📞' button.",
        "One-click instant payment summary via UPI (Google Pay / PhonePe) with instant refund guarantee."
      ],
      techSpecs: {
        "Target Viewport": "390px × 844px",
        "Primary Component": "DeliveryModeToggle, UnifiedOrderSummary, LiveTrackingMap, RiderProfilePill",
        "Logistics API": "Rapido Hyperlocal Delivery Webhook + Shiprocket REST API",
        "Design Token": "Active Step Pulse (#059669), Map Card (rounded-2xl)"
      }
    }
  },
  "store-admin": {
    a1: {
      code: "Screen A1",
      title: "Store Admin: Product Catalog Management",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a1.png",
      summary: "High-density merchandising center for regional store managers, supporting dual-view switching, bulk SKU price overrides, and stock health monitoring.",
      features: [
        "Collapsible dark slate sidebar navigation with active 'Products & Catalog (1,248)' badge and branch selector ('Tirupati Main Hub').",
        "Dual-View Switcher: Toggle between high-density Table/Row View and Grid/Column Merchandising View.",
        "Bulk Action toolbar: Select multiple products for bulk price modifications, category updates, or CSV export.",
        "Multi-column sortable table: Thumbnail, SKU code, product title, category, target species, variant count, price range, current stock badge, and status toggle.",
        "Visual stock warning badges: Green for healthy stock (> 10), Amber for low stock (< 5), Red for zero stockout.",
        "Quick action dropdown per row: Edit product, duplicate SKU, or mark inactive."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "CatalogDataTable, MerchandisingGrid, BulkActionToolbar, DualViewSwitch",
        "Data Source": "Supabase 'products' + 'product_variants' + 'store_inventory'",
        "Design Token": "Slate Dark Sidebar (#0F172A), Emerald Brand Pill (#059669)"
      }
    },
    a2: {
      code: "Screen A2",
      title: "Store Admin: Product Creation & Editor",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a2.png",
      summary: "Comprehensive catalog authoring tool featuring Cloudflare R2 drag-and-drop media uploading, veterinary markdown guidelines, and dynamic variant pricing matrix.",
      features: [
        "Section 1 (Basic Info): Product title, brand autocomplete, veterinary category, species selector, and 'Prescription Required' toggle switch.",
        "Section 2 (Cloudflare R2 Media Pipeline): Multipart drag-and-drop file upload zone, hero image selector, re-ordering handles, and image preview.",
        "Section 3 (Clinical Markdown Editor): Multi-tab rich editor for clinical indications, nutritional composition, and dosage instructions.",
        "Section 4 (Variant & Pricing Matrix): Dynamic matrix managing SKU code, pack weight/size, cost price, selling price, barcode EAN, and low-stock threshold.",
        "Right-column publishing settings: Store branch assignment (Tirupati Main Hub, Tirupati South), Rapido hyperlocal eligibility, and barcode scanner integration.",
        "Sticky footer action bar: 'Save Draft', 'Preview on Mobile App', and 'Publish Product 🚀'."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "R2MediaDropzone, MarkdownEditor, VariantPricingGrid, PublishingDrawer",
        "Storage Integration": "Direct multipart upload to Cloudflare R2 bucket with signed URLs",
        "Design Token": "Form Card (rounded-xl), Emerald Button (#059669)"
      }
    },
    a3: {
      code: "Screen A3",
      title: "Store Admin: Inventory Control & Stock Inwarding",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a3.png",
      summary: "Inventory auditing and supplier PO inwarding interface, ensuring available-to-sell counts accurately reflect reserved checkout items.",
      features: [
        "KPI Metric Strip: Total Stock Value (₹42.8 Lakhs), Low-Stock Alerts (14 SKUs), Reserved in Active Carts (128 units), and Out-of-Stock SKUs (6).",
        "Filter chips: 'All Items (1,248)', 'Low Stock (< 5)', 'Out of Stock', 'Expiring Soon (Pharmacy)'.",
        "Stock data table tracking physical stock, reserved cart stock, available stock, reorder levels, and days of cover run-rate.",
        "Slide-Over 'Adjust Stock' Drawer: Triggered for quick inwarding or damage write-offs.",
        "Mandatory reason code logging: 'Stock Inward from Supplier / PO', 'Damaged / Expired', 'Customer Return', 'Manual Audit Correction'.",
        "Immutable audit tracking recording the store manager's ID, timestamp, and PO reference number."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "InventoryKPICards, StockLevelGrid, SlideOverAdjustDrawer, ReasonCodeSelector",
        "Data Source": "Supabase 'store_inventory' + 'inventory_transactions'",
        "Design Token": "Warning Alert (#F59E0B), Danger Badge (#EF4444)"
      }
    },
    a4: {
      code: "Screen A4",
      title: "Store Admin: Orders & Delivery Dispatch Center",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a4.png",
      summary: "High-throughput fulfillment center synchronizing hyperlocal riders (Rapido) and national shipping (Shiprocket) through a 5-stage Kanban pipeline.",
      features: [
        "Delivery mode filter tabs: 'All Orders (42)', '⚡ Hyperlocal Rapido (18)', '📦 Standard Courier (24)'.",
        "5-Stage Kanban Workflow: 'New Orders (4)', 'Packing & Verification (2)', 'Ready for Dispatch (3)', 'In Transit (5)', 'Delivered Today (28)'.",
        "Prominent pack timers and SLA countdowns ('SLA: 8 mins remaining') ensuring 45-minute hyperlocal delivery compliance.",
        "Automated rider assignment card displaying Rapido rider profile, vehicle details, and arrival countdown.",
        "Right-docked Order Inspector Panel: Verified veterinary prescription preview, item batch barcodes, and one-click shipping label / AWB generation.",
        "Direct rider communication and proof-of-delivery OTP verification."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "DispatchKanbanBoard, OrderCardSLA, RiderAssignmentPill, OrderDetailPanel",
        "Integrations": "Rapido Fleet Dispatch Webhook + Shiprocket AWB Generator",
        "Design Token": "Status Kanban Columns, Emerald Accent (#059669)"
      }
    },
    a5: {
      code: "Screen A5",
      title: "Store Admin: Vet Doctor EHR & Consultation Desk",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a5.png",
      summary: "Clinical veterinarian electronic health record (EHR) workstation managing today's appointment queue, physical vitals, and one-click WhatsApp digital prescriptions.",
      features: [
        "Doctor Top Header: PetEase Clinic KT Road, Dr. S. Rao BVSc & AH, Room 1 status 'In Session', Queue metrics ('14 total | 1 active | 2 waiting').",
        "Left Panel (Patient Queue): Active Patient (Bruno, Labrador 28.4kg), Next in Queue (Bella, Shih Tzu), and upcoming slots.",
        "Center Panel (EHR & Examination): Bruno's clinical record, vitals inputs (Weight 28.4kg, Temp 101.4°F, Pulse 95), physical examination notes, and ICD-Vet diagnosis.",
        "Right Panel (Interactive Rx Builder): Pharmacy inventory search, Apoquel 16mg and Otikfree Ear Drops dosing rules, anti-rabies booster scheduling, and doctor signature block.",
        "Primary Action: 'Sign & Dispatch Digital Rx to Patient WhatsApp & App 🚀'."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "ClinicQueuePanel, EHRClinicalForm, InteractiveRxBuilder, DigitalSignatureBlock",
        "Integrations": "WhatsApp Cloud API for instant prescription dispatch",
        "Design Token": "Clinical Slate Layout (#0F172A), Emerald Verification Badge (#059669)"
      }
    },
    a6: {
      code: "Screen A6",
      title: "Store Admin: Supplier Purchase Orders (PO) & GRN Management",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_a6.png",
      summary: "Procurement and Goods Receipt Note (GRN) receiving center reconciling distributor shipments against purchase orders with transit damage write-offs.",
      features: [
        "Procurement KPI Strip: 4 Open POs (₹3.42L), 18 Completed Inwardings (₹14.8L), 2 Shipments Arrived at Dock, 98.2% Supplier Fill Rate.",
        "PO Data Table: Multi-column tracking of PO number, supplier (Farmina, Royal Canin, Boehringer Ingelheim), delivery dates, SKU counts, and statuses.",
        "Slide-Over GRN Receiving Modal (PO-0842 Farmina): Comparing quantity ordered vs received with batch number and expiration date inputs.",
        "Damaged Goods Write-Off: Automated checkbox to flag damaged packaging for supplier credit note generation.",
        "Primary Action: 'Approve GRN & Update Physical Inventory (+83 units)'."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "ProcurementKPICards, POTable, GRNReceivingModal, BatchExpiryInput",
        "Data Source": "Supabase 'purchase_orders' + 'goods_receipt_notes' + 'store_inventory'",
        "Design Token": "Dock Arrived Badge (Warning Amber #F59E0B), Approved Badge (#10B981)"
      }
    }
  },
  "super-admin": {
    s1: {
      code: "Screen S1",
      title: "Super Admin: Executive Analytics & BI Hub",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s1.png",
      summary: "Executive command center consolidating multi-branch GMV analytics, appointment revenue, stockout run-rates, and geographic demand heatmaps.",
      features: [
        "Multi-Store Global Filter: Filter across all hubs (Tirupati Main, Tirupati South, Hyderabad Central, Vijayawada Hub) or inspect consolidated totals.",
        "Date range selector ('Today', 'Last 7 Days', 'Last 30 Days', 'Custom Range') with one-click PDF Report & CSV export engine.",
        "Executive KPI Cards: Total GMV (₹1.48 Cr, ↑18.4% WoW), Clinic Revenue (₹36.2 Lakhs, ↑24.1% WoW), Active Pet Passports (18,450 pets), Low-Stock Alerts (23 SKUs).",
        "Chart 1 (Velocity): Horizontal bar chart of top SKUs comparing units sold against revenue generated.",
        "Chart 2 (Service Breakdown): Segmented distribution comparing Vet Consults (52%), Vaccinations (26%), Home Grooming (15%), and Dietetics (7%).",
        "Chart 3 (Geographic Demand): City breakdown heatmap comparing hub order volumes and Rapido 45-min SLA adherence (94.8% on-time).",
        "Chart 4 (Stockout Risk Predictor): Run-rate monitor highlighting high-velocity SKUs that will deplete in < 48 hours with emergency reorder triggers."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "ExecutiveKPIGrid, VelocityBarChart, ServiceDonutChart, StockoutPredictorTable",
        "Analytics Engine": "Aggregated SQL views on Supabase + Redis cache",
        "Design Token": "Slate Dark Theme (#0F172A), Emerald Metric Accent (#059669)"
      }
    },
    s2: {
      code: "Screen S2",
      title: "Super Admin: Store Admin Approvals & RBAC",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s2.png",
      summary: "Role-based access control and credential verification hub protecting veterinary clinical authority and customer data privacy.",
      features: [
        "Segmented tabs: 'Pending Onboarding Requests (4)', 'Active Administrators (42)', 'Role Permission Matrix'.",
        "Applicant review table: Name, email, assigned clinic/store hub, requested role (Store Manager, Vet Doctor, Inventory Clerk), applied date.",
        "Credential Preview Modal: Embedded PDF verification of veterinary council registrations (BVSc license) and government ID proofs.",
        "One-click 'Approve Admin' (Emerald) or 'Reject / Revoke' (Red) with reason dialog.",
        "Granular permission switches per administrator: 'Can Edit Prices [ON]', 'Can Issue Refunds [ON]', 'Can View Customer Phone Numbers [OFF - Privacy]', 'Can Adjust Inventory [ON]'.",
        "Emergency kill switch: Instant 'Deactivate Account' toggle for security containment."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "RBACApplicantTable, LicensePreviewModal, GranularPermissionToggles, EmergencyKillSwitch",
        "Security Model": "Supabase Row-Level Security (RLS) + JWT claims for roles",
        "Design Token": "Security Shield Badges, Red Danger Button (#EF4444)"
      }
    },
    s3: {
      code: "Screen S3",
      title: "Super Admin: Master Inventory & Advanced Data Grid",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s3.png",
      summary: "Bloomberg-grade multi-branch inventory data grid with click-to-sort headers, cross-hub comparison, and emergency inter-branch transfer modals.",
      features: [
        "Omni-Search Bar: Instant filtering across SKU, Product Title, Brand, Barcode EAN, or Batch Number.",
        "Multi-select dropdown filters: Branch Location, Category, Stock Status (In Stock, Low Stock, Stockout), Supplier.",
        "Sticky multi-column sortable table: Comparing stock distributed across Tirupati Main, Tirupati South, and Hyderabad Central hubs.",
        "Network-wide velocity tracking: 30-day units sold, revenue generated, and stock health status badges.",
        "Batch action toolbar: 'Transfer Selected Stock', 'Initiate Supplier PO', 'Export Master XLS'.",
        "Modal Overlay ('Inter-Branch Stock Transfer'): Seamlessly move stock from surplus hubs (e.g. Hyderabad) to deficit hubs (Tirupati Main) with intra-state courier tracking."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "AdvancedDataGrid, OmniSearchBar, InterBranchTransferModal, BatchActionBar",
        "Data Grid Features": "Virtual scrolling, multi-column sort, branch balance columns",
        "Design Token": "Monospace Numeric Font, Emerald Transfer Pill (#059669)"
      }
    },
    s4: {
      code: "Screen S4",
      title: "Super Admin: System Audit Logs & Operational Health",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s4.png",
      summary: "Real-time infrastructure health monitoring and immutable audit trail capturing every privileged database mutation.",
      features: [
        "Live Operational Health Badges: Cloudflare R2 Media (24ms latency, 142 GB assets), Supabase Realtime (1,482 active websockets), WhatsApp Cloud API (99.4% delivery rate), Payment Gateway (99.1% success rate).",
        "Audit Log Filter Bar: Filter by actor (Admins, Store Managers, System Crons), action type (`STOCK_UPDATED`, `ADMIN_APPROVED`, `REFUND_ISSUED`, `PRICE_OVERRIDE`), and date range.",
        "Chronological audit trail table displaying exact timestamp, actor IP address, action badge, target SKU/Order, and delta change summary.",
        "Slide-Over Payload Inspector Drawer: Granular before-and-after JSON diff viewer highlighting changes in green (added) and red (removed).",
        "Export audit logs to immutable compliance archives."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "InfrastructureHealthBar, AuditStreamTable, JSONDiffInspectorDrawer, ActionFilterRail",
        "Logging Engine": "Append-only PostgreSQL audit table with cryptographic hash verification",
        "Design Token": "System Health Indicators, JSON Monospace Code Block"
      }
    },
    s5: {
      code: "Screen S5",
      title: "Super Admin: Multi-Clinic Branch & Franchise Governance Map",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s5.png",
      summary: "Geographic multi-hub command center visualizing physical clinics, dark-store fulfillment hubs, and live Rapido dispatch telemetry across AP & Telangana.",
      features: [
        "Interactive Geographic Map: Visual node clustering across Tirupati (KT Road Clinic, Air Bypass Dark Store), Hyderabad (Banjara Hills, Madhapur Hub), Vijayawada (MG Road), and Visakhapatnam.",
        "Branch Performance KPI Summary: KT Road Clinic Tirupati (₹18.4L GMV, 98.2% Rapido SLA), Hyderabad Banjara Hub (₹42.6L GMV, 96.4% SLA), Vijayawada MG Road (₹14.1L GMV).",
        "Clinical Exam Room Telemetry: Live doctor availability status, active exam room utilization, and walk-in vs pre-booked appointment ratios.",
        "Inter-Hub Dark Store Telemetry: Real-time stock rebalancing transit tracking between regional fulfillment centers and local clinics.",
        "Franchise Compliance Badges: Veterinary council regulatory compliance, biomedical waste disposal accreditation, and cold-chain temperature telemetry."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "GeoMapClusterView, HubPerformanceRail, ClinicCapacityGrid, ColdChainMonitor",
        "Data Source": "Supabase 'branches' + 'telemetry_logs' + 'compliance_certifications'",
        "Design Token": "Emerald Active Hubs (#059669), Amber Capacity Alert (#F59E0B)"
      }
    },
    s6: {
      code: "Screen S6",
      title: "Super Admin: Financial Settlements & Revenue Reconciliation",
      viewport: "1440px × 900px (Desktop Responsive)",
      image: "assets/screen_s6.png",
      summary: "Dual-stream financial ledger reconciling veterinary clinical consultations, pharmacy disbursements, Rapido delivery fees, and automated franchise bank payouts.",
      features: [
        "Financial Settlement KPI Strip: Net Disbursed (₹48.9 Lakhs), Escrow Balance (₹12.4 Lakhs), Pending Payouts (₹3.8 Lakhs), MDR & Gateway Fees (1.82%).",
        "Dual Revenue Stream Split: In-Clinic Clinical Revenue (Consultations, Diagnostics, Procedures) vs. Hyperlocal Pet Commerce (Pharmacy & Premium Food).",
        "Daily Automated Reconciliation Ledger: Batch settlement date, transaction count, gross GMV, platform fee deduction, and net NEFT payout reference.",
        "Franchise Partner Payout Drawer: Granular breakdown for KT Road Clinic franchise owner with TDS deduction certificates and GST invoice generation.",
        "Dispute Resolution & Chargeback Center: Real-time dispute handling for canceled slots, returned pharmacy items, or Rapido delivery SLA failures.",
        "One-Click Instant Payout Trigger: Automated RazorpayX / Cashfree bulk transfer trigger with dual-signature administrative authorization."
      ],
      techSpecs: {
        "Target Viewport": "1440px × 900px",
        "Primary Component": "SettlementSummaryKPIs, DualStreamRevenueChart, ReconciliationLedgerTable, InstantPayoutDrawer",
        "Accounting Engine": "Double-entry ledger on PostgreSQL + RazorpayX Payouts API",
        "Design Token": "Financial Positive Green (#10B981), Slate Ledger Border (#E2E8F0)"
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const portalNav = document.getElementById("portalNav");
  const portalSections = document.querySelectorAll(".portal-section");

  // Portal Switching
  portalNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;

    portalNav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const portalId = btn.getAttribute("data-portal");
    portalSections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === `portal-${portalId}`) {
        sec.classList.add("active");
      }
    });
  });

  // Setup PetEase Screen Tabs
  setupScreenTabs("peteaseTabs", "petease", "peteaseImg", "peteaseDetails", "expandPetEaseBtn");

  // Setup Customer Mobile Screen Tabs
  setupScreenTabs("customerTabs", "customer", "customerImg", "customerDetails", "expandCustomerBtn");
  
  // Setup Store Admin Screen Tabs
  setupScreenTabs("storeAdminTabs", "store-admin", "storeAdminImg", "storeAdminDetails", "expandStoreBtn");

  // Setup Super Admin Screen Tabs
  setupScreenTabs("superAdminTabs", "super-admin", "superAdminImg", "superAdminDetails", "expandSuperBtn");

  // Modal handlers
  setupModal();
});

function setupScreenTabs(tabsId, portalKey, imgId, detailsId, expandBtnId) {
  const tabsContainer = document.getElementById(tabsId);
  const imgEl = document.getElementById(imgId);
  const detailsEl = document.getElementById(detailsId);
  const expandBtn = document.getElementById(expandBtnId);

  if (!tabsContainer || !imgEl || !detailsEl) return;

  function renderScreen(screenKey) {
    const data = SCREEN_DATA[portalKey][screenKey];
    if (!data) return;

    imgEl.src = data.image;
    imgEl.alt = data.title;

    // Render Details
    let specsHtml = "";
    if (data.techSpecs) {
      specsHtml = `
        <div class="detail-card">
          <h3>⚙️ Technical Specifications</h3>
          <table class="spec-table">
            <tbody>
              ${Object.entries(data.techSpecs).map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    detailsEl.innerHTML = `
      <div class="detail-card">
        <h3>📋 ${data.code}: ${data.title}</h3>
        <p style="color:var(--slate-muted); font-size:14px; margin-bottom:14px;">${data.summary}</p>
        <ul class="feature-list">
          ${data.features.map(f => `<li><span class="check-bullet">✓</span><span>${f}</span></li>`).join("")}
        </ul>
      </div>
      ${specsHtml}
    `;

    if (expandBtn) {
      expandBtn.onclick = () => {
        openModal(data.title, data.image);
      };
    }
  }

  tabsContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".tab-chip");
    if (!chip) return;

    tabsContainer.querySelectorAll(".tab-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const screenKey = chip.getAttribute("data-screen");
    renderScreen(screenKey);
  });

  // Initial render for first tab
  const activeChip = tabsContainer.querySelector(".tab-chip.active");
  if (activeChip) {
    renderScreen(activeChip.getAttribute("data-screen"));
  }
}

function setupModal() {
  const modal = document.getElementById("imageModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const backdrop = document.getElementById("modalBackdrop");

  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  backdrop.addEventListener("click", () => modal.classList.remove("active"));
}

function openModal(title, imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");

  modalTitle.textContent = title;
  modalImg.src = imgSrc;
  modal.classList.add("active");
}
