# Plan: Implement Product Bundle/Package Pricing System

## Context

The user wants to implement product bundles/packages (like "Basic Set", "Professional Set", "Enterprise Set") with 3-5 tiers per product, similar to Alibaba's package offerings. Currently, the site has tiered quantity pricing (1-99 pcs, 100+ pcs) but no bundle/package system.

**Requirements clarified by user**:
1. Show both bundle selector AND existing quantity-based pricing when bundles exist
2. Users select bundles via tier buttons/selector
3. Allow quantity multiplier for bundles (e.g., 2x Basic Set)
4. 3-5 bundle tiers per product

## Current State Analysis

### Existing Tiered Pricing System
- **Location**: `product.html` lines 2068-2085
- **CSS**: `.mc-tier-grid` (2-column grid), `.mc-tier`, `.mc-tier-best`, `.mc-tier-price`
- **Data**: `price_tier_1_99` and `price_tier_100plus` in `alibaba_enriched.json`
- **Display**: Shows quantity ranges with unit prices

### Product Data Structure
- **`data/products.json`**: Basic product info (id, title, category, price, description, specs, image, url)
- **`data/alibaba_enriched.json`**: Enriched Alibaba data with pricing tiers
- **Backend model**: `backend/models/productModel.js` defines schema but may not be used by frontend

### Order Flow
1. User clicks "Wholesale" or "Customize" buttons
2. `openOrderModal()` opens modal with product info
3. Modal has quantity input field (`#om-qty`)
4. Form submits to `contact.html` with query parameters

## Implementation Approach

### 1. Extend Product Data Structure

Add `bundles` array to `data/products.json` for relevant products:

```json
{
  "id": "ym-0002",
  "title": "Product Name",
  // ... existing fields
  "bundles": [
    {
      "id": "basic",
      "name": "Basic Set",
      "description": "Essential components for standard installation",
      "price": "$1,200",
      "features": ["10 units", "Basic documentation", "1-year warranty"],
      "recommended": false
    },
    {
      "id": "professional",
      "name": "Professional Set",
      "description": "Complete package for professional installers",
      "price": "$2,500",
      "features": ["25 units", "Full documentation", "Installation guide", "3-year warranty"],
      "recommended": true
    },
    {
      "id": "enterprise",
      "name": "Enterprise Set",
      "description": "Comprehensive solution for large deployments",
      "price": "$5,000",
      "features": ["50 units", "Priority support", "Custom branding", "5-year warranty", "Training session"],
      "recommended": false
    }
  ]
}
```

### 2. Create Bundle Selection UI

**CSS Additions** (add to existing `<style>` block in `product.html`):
- Create `.mc-bundle-grid` with 3-column layout (responsive)
- Style `.mc-bundle` cards similar to `.mc-tier` but with more detail
- Add `.mc-bundle-recommended` for highlighted bundle
- Include feature list styling

**HTML/JS Rendering** (modify `product.html` around line 2068):
- Check if product has `bundles` array
- If yes, generate bundle grid IN ADDITION to existing tiered pricing (show both)
- Each bundle card shows: name, description, price, features list, select button
- Store selected bundle ID in data attribute
- Include quantity multiplier option for selected bundle (e.g., "2x Basic Set")

### 3. Integrate with Order Flow

**Modify `openOrderModal()` function** (line 2258):
- Accept selected bundle ID as parameter
- Store bundle ID in hidden field in order modal
- Update modal to show selected bundle info instead of just quantity

**Update Order Modal Form**:
- Add hidden input for bundle ID: `<input type="hidden" id="om-bundle" name="bundle">`
- Show bundle summary when bundle is selected
- Keep quantity field for multiplier (e.g., "2x Basic Set")
- Update quantity label to reflect bundle multiplier (e.g., "Number of sets")

**Modify `submitOrderForm()`** (line 2278):
- Include bundle ID and details in the inquiry message
- Update redirect to `contact.html` with bundle info

### 4. Multilingual Support

Add translation keys to `T` object in `assets/js/main.js`:
- `bundle_basic`, `bundle_professional`, `bundle_enterprise`
- `bundle_select`, `bundle_selected`, `bundle_features`
- French and Arabic translations

### 5. Backend Updates (Optional)

Update `backend/models/productModel.js` schema to include `bundles` array for future API use.

## Critical Files to Modify

1. **`C:\Users\Administrator\Desktop\.claude\data\products.json`**
   - Add `bundles` array to key products
   - Start with 2-3 products for testing

2. **`C:\Users\Administrator\Desktop\.claude\product.html`**
   - Add CSS for bundle components (near `.mc-tier` styles, line 1376)
   - Update pricing rendering logic (line 2068-2085)
   - Modify `openOrderModal()` and `submitOrderForm()` functions
   - Add bundle selection JavaScript logic

3. **`C:\Users\Administrator\Desktop\.claude\assets\js\main.js`**
   - Add bundle-related translation keys to `T` object

4. **`C:\Users\Administrator\Desktop\.claude\backend\models\productModel.js`** (optional)
   - Add `bundles` field to schema

## Implementation Steps

### Phase 1: Data & Core UI
1. Add bundle data to 2-3 products in `products.json`
2. Create bundle CSS styles in `product.html`
3. Implement bundle rendering logic in product detail overlay
4. Test bundle display without selection logic

### Phase 2: Selection & Integration
1. Add bundle selection JavaScript (click handlers, state management)
2. Update `openOrderModal()` to accept bundle parameter
3. Modify order modal to show bundle info
4. Update form submission to include bundle data

### Phase 3: Polish & Testing
1. Add multilingual translations
2. Test responsive design (mobile, tablet)
3. Test RTL layout for Arabic
4. Test complete flow: bundle selection → order modal → contact form

## Considerations

1. **Backward Compatibility**: Products without bundles should show existing tiered pricing or single price
2. **Show Both Options**: When bundles exist, display both bundle selector AND quantity-based pricing tiers
3. **Quantity Multiplier**: Users can select quantity multiplier for bundles (e.g., 2x Basic Set)
4. **Responsive Design**: Bundle grid should collapse on mobile (1 column)
5. **User Experience**: Clear visual feedback for selected bundle
6. **Data Consistency**: Bundle prices should be in same format as existing prices (e.g., "$1,200")
7. **Fallback**: If bundle selection not made, default to first bundle or show error

## Verification

1. **Test Cases**:
   - Product with bundles: shows bundle selector AND quantity-based pricing
   - Product without bundles: shows existing tiered pricing only
   - Bundle selection updates UI visually
   - Quantity multiplier works for bundles (e.g., 2x Basic Set)
   - Order modal shows correct bundle info with multiplier
   - Contact form receives bundle details and quantity in query string
   - Multilingual: bundle names translate correctly
   - Mobile: bundle grid responsive

2. **Manual Testing**:
   - Open product with bundles
   - Select different bundles
   - Click "Wholesale" or "Customize"
   - Verify modal shows selected bundle
   - Submit form and check URL parameters

This implementation extends the existing tiered pricing pattern to support product bundles/packages while maintaining the site's design system and multilingual support.