/**
 * Region-based dynamic pricing for Aisle & Grace
 * Detects user location and updates pricing display accordingly
 */

(function() {
  'use strict';

  // Format price with proper decimal places
  function formatPrice(price, currency) {
    // Currencies with no decimal places
    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'CLP', 'PYG', 'XAF', 'XOF', 'MNT', 'IQD'];

    if (noDecimalCurrencies.includes(currency)) {
      return Math.round(price).toLocaleString();
    }

    // Standard currencies with 2 decimal places
    return price.toFixed(2);
  }

  // Build display string for price
  function buildPriceDisplay(pricing) {
    const formattedPrice = formatPrice(pricing.price, pricing.currency);
    return `${pricing.symbol}${formattedPrice}`;
  }

  // Update all price elements on the page
  function updatePricing(countryCode) {
    const pricing = REGIONAL_PRICING[countryCode] || DEFAULT_PRICING;
    const priceDisplay = buildPriceDisplay(pricing);

    console.log(`Aisle & Grace: Pricing set to ${pricing.country} (${countryCode}): ${priceDisplay}`);

    // Update all elements with data-price attribute
    document.querySelectorAll('[data-price]').forEach(element => {
      const template = element.getAttribute('data-price');
      element.textContent = template.replace('{{PRICE}}', priceDisplay);
    });

    // Store detected region for analytics/debugging
    sessionStorage.setItem('detectedRegion', countryCode);
    sessionStorage.setItem('detectedCountry', pricing.country);
    sessionStorage.setItem('pricingCurrency', pricing.currency);
    sessionStorage.setItem('displayPrice', priceDisplay);
  }

  // Detect user region using IP geolocation
  async function detectRegion() {
    // Check if we've already detected the region in this session
    const cachedRegion = sessionStorage.getItem('detectedRegion');
    if (cachedRegion) {
      console.log('Aisle & Grace: Using cached region:', cachedRegion);
      updatePricing(cachedRegion);
      return;
    }

    try {
      // Use ipapi.co for geolocation (free tier: 1000 requests/day, no key required)
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Geolocation API error');
      }

      const data = await response.json();
      const countryCode = data.country_code;

      if (countryCode && REGIONAL_PRICING[countryCode]) {
        updatePricing(countryCode);
      } else {
        console.log('Aisle & Grace: Country not in pricing table, using default (UK)');
        updatePricing('GB');
      }
    } catch (error) {
      console.warn('Aisle & Grace: Could not detect region, using default (UK):', error);
      updatePricing('GB');
    }
  }

  // Alternative: Use Cloudflare's trace (faster, no rate limits, but less detailed)
  async function detectRegionCloudflare() {
    try {
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
      const data = await response.text();

      const lines = data.split('\n');
      const locLine = lines.find(line => line.startsWith('loc='));

      if (locLine) {
        const countryCode = locLine.split('=')[1].trim();
        if (countryCode && REGIONAL_PRICING[countryCode]) {
          updatePricing(countryCode);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.warn('Aisle & Grace: Cloudflare detection failed:', error);
      return false;
    }
  }

  // Manual override for testing (via URL parameter)
  function checkManualOverride() {
    const urlParams = new URLSearchParams(window.location.search);
    const overrideCountry = urlParams.get('country');

    if (overrideCountry) {
      const countryCode = overrideCountry.toUpperCase();
      if (REGIONAL_PRICING[countryCode]) {
        console.log('Aisle & Grace: Manual country override:', countryCode);
        updatePricing(countryCode);
        return true;
      }
    }
    return false;
  }

  // Initialize pricing detection
  async function initPricing() {
    // Check for manual override first (for testing)
    if (checkManualOverride()) {
      return;
    }

    // Try Cloudflare first (faster and no rate limits)
    const cloudflareSuccess = await detectRegionCloudflare();

    // If Cloudflare fails, fall back to ipapi.co
    if (!cloudflareSuccess) {
      await detectRegion();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricing);
  } else {
    initPricing();
  }
})();
