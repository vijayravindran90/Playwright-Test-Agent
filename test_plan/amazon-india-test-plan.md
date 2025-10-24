# Amazon India (amazon.in) - E-commerce Test Plan

## Application Overview

Amazon India is a comprehensive e-commerce platform offering a wide range of products and services. This test plan covers the core functionalities that are critical for user experience and business operations.

## Test Scenarios

### 1. Homepage and Navigation

#### 1.1 Homepage Loading and Basic Elements
**Steps:**
1. Navigate to https://www.amazon.in/
2. Verify presence of key elements:
   - Amazon logo
   - Search bar
   - Cart icon
   - Sign in/Account menu
   - Category navigation menu
   - Footer links

**Expected Results:**
- All elements load correctly
- Images are visible
- Links are clickable
- Page is responsive

#### 1.2 Category Navigation
**Steps:**
1. Click on the hamburger menu ("All")
2. Verify main category list appears
3. Hover over a main category
4. Click on a subcategory

**Expected Results:**
- Category menu expands properly
- Subcategories are displayed correctly
- Navigation leads to correct category pages

### 2. Search Functionality

#### 2.1 Basic Search
**Steps:**
1. Click on the search bar
2. Type "smartphone"
3. Click search button or press Enter

**Expected Results:**
- Search results page loads
- Relevant products are displayed
- Search filters are available
- Product count is displayed

#### 2.2 Search Filters
**Steps:**
1. From search results page
2. Apply price filter
3. Select a brand filter
4. Choose customer rating filter

**Expected Results:**
- Filters apply immediately
- Results update accordingly
- Selected filters are visible
- Clear filters option is available

### 3. Product Page

#### 3.1 Product Details Verification
**Steps:**
1. Click on a product from search results
2. Verify presence of:
   - Product title
   - Price
   - Product images
   - Buy Now button
   - Add to Cart button
   - Product description
   - Customer reviews

**Expected Results:**
- All product information displays correctly
- Images are zoomable
- Price is clearly visible
- Buy/Cart buttons are prominent

#### 3.2 Add to Cart
**Steps:**
1. Click "Add to Cart" button
2. Verify cart confirmation overlay
3. Click on cart icon

**Expected Results:**
- Product adds to cart successfully
- Cart count updates
- Cart page shows correct item
- Price calculation is accurate

### 4. Account Management

#### 4.1 Sign In
**Steps:**
1. Click on "Account & Lists"
2. Click "Sign in" button
3. Enter valid credentials
4. Submit login form

**Expected Results:**
- Login form displays correctly
- Validation works for incorrect credentials
- Successful login redirects appropriately
- User name appears in header

#### 4.2 Account Information
**Steps:**
1. Click on "Account & Lists" when signed in
2. Navigate through:
   - Your Orders
   - Your Addresses
   - Payment options
   - Account settings

**Expected Results:**
- All sections are accessible
- Information is displayed securely
- Edit options work correctly
- Changes save properly

### 5. Shopping Cart

#### 5.1 Cart Management
**Steps:**
1. Add multiple items to cart
2. Update quantities
3. Remove items
4. Save items for later

**Expected Results:**
- Cart updates in real-time
- Price calculations are accurate
- Remove functionality works
- Save for later moves items correctly

#### 5.2 Checkout Process
**Steps:**
1. Click "Proceed to Buy"
2. Select delivery address
3. Choose payment method
4. Review order details

**Expected Results:**
- Checkout flow is smooth
- Address selection works
- Payment options are available
- Order summary is accurate

## Test Environment Requirements

- Multiple browsers (Chrome, Firefox, Safari)
- Different devices (Desktop, Mobile, Tablet)
- Various screen resolutions
- Different network conditions

## Notes

- All tests should be performed in both logged-in and logged-out states where applicable
- Consider regional variations (language, currency, shipping options)
- Test during both peak and off-peak hours
- Verify responsive design across different screen sizes

## Success Criteria

1. All critical functionalities work as expected
2. Page load times are within acceptable limits
3. All error scenarios are handled gracefully
4. User feedback is clear and appropriate
5. Security measures are properly implemented