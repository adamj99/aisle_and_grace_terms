// Regional pricing data for Aisle & Grace
const PRICING_DATA = {
  'AL': { price: '1.27', currency: 'USD', symbol: '$', vat: '20%' },
  'DZ': { price: '125.00', currency: 'DZD', symbol: 'DZD', vat: 'No VAT' },
  'AO': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'AG': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'AR': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'AM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'AW': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'AU': { price: '1.79', currency: 'AUD', symbol: 'AU$', vat: '10%' },
  'AT': { price: '1.09', currency: 'EUR', symbol: '€', vat: '20%' },
  'AZ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BS': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BH': { price: '0.99', currency: 'USD', symbol: '$', vat: '10%' },
  'BD': { price: '150.00', currency: 'BDT', symbol: '৳', vat: '15%' },
  'BY': { price: '1.27', currency: 'USD', symbol: '$', vat: '20%' },
  'BE': { price: '1.09', currency: 'EUR', symbol: '€', vat: '21%' },
  'BZ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BJ': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'BM': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BO': { price: '7.49', currency: 'BOB', symbol: 'Bs', vat: 'No VAT' },
  'BA': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BW': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BR': { price: '5.49', currency: 'BRL', symbol: 'R$', vat: 'No VAT' },
  'VG': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'BG': { price: '2.09', currency: 'BGN', symbol: 'лв', vat: '20%' },
  'BF': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'KH': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CM': { price: '700', currency: 'XAF', symbol: 'FCFA', vat: '19.25%' },
  'CA': { price: '1.49', currency: 'CAD', symbol: 'CA$', vat: 'No VAT' },
  'CV': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'KY': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CF': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'TD': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CL': { price: '1,100', currency: 'CLP', symbol: '$', vat: '19%' },
  'CO': { price: '4,000', currency: 'COP', symbol: '$', vat: 'No VAT' },
  'KM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CG': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CD': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'CR': { price: '520.00', currency: 'CRC', symbol: '₡', vat: 'No VAT' },
  'HR': { price: '1.09', currency: 'EUR', symbol: '€', vat: '25%' },
  'CY': { price: '1.09', currency: 'EUR', symbol: '€', vat: '19%' },
  'CZ': { price: '25.99', currency: 'CZK', symbol: 'Kč', vat: '21%' },
  'CI': { price: '700', currency: 'XOF', symbol: 'CFA', vat: '18%' },
  'DK': { price: '8.00', currency: 'DKK', symbol: 'kr', vat: '25%' },
  'DJ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'DM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'DO': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'EC': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'EG': { price: '56.99', currency: 'EGP', symbol: 'E£', vat: '14%' },
  'SV': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'ER': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'EE': { price: '1.09', currency: 'EUR', symbol: '€', vat: '24%' },
  'FJ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'FI': { price: '1.09', currency: 'EUR', symbol: '€', vat: '25.5%' },
  'FR': { price: '1.09', currency: 'EUR', symbol: '€', vat: '20%' },
  'GA': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'GM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'GE': { price: '3.00', currency: 'GEL', symbol: '₾', vat: '18%' },
  'DE': { price: '1.09', currency: 'EUR', symbol: '€', vat: '19%' },
  'GH': { price: '15.00', currency: 'GHS', symbol: 'GH₵', vat: '21.9%' },
  'GI': { price: '0.79', currency: 'GBP', symbol: '£', vat: 'No VAT' },
  'GR': { price: '1.09', currency: 'EUR', symbol: '€', vat: '24%' },
  'GD': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'GT': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'GN': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'GW': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'HT': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'HN': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'HK': { price: '8.00', currency: 'HKD', symbol: 'HK$', vat: 'No VAT' },
  'HU': { price: '439', currency: 'HUF', symbol: 'Ft', vat: '27%' },
  'IS': { price: '1.12', currency: 'EUR', symbol: '€', vat: '24%' },
  'IN': { price: '110.00', currency: 'INR', symbol: '₹', vat: '18%' },
  'ID': { price: '18,000', currency: 'IDR', symbol: 'Rp', vat: 'No VAT' },
  'IQ': { price: '1,400', currency: 'IQD', symbol: 'ع.د', vat: 'No VAT' },
  'IE': { price: '1.09', currency: 'EUR', symbol: '€', vat: '23%' },
  'IL': { price: '3.40', currency: 'ILS', symbol: '₪', vat: 'No VAT' },
  'IT': { price: '1.09', currency: 'EUR', symbol: '€', vat: '22%' },
  'JM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'JP': { price: '180', currency: 'JPY', symbol: '¥', vat: '10%' },
  'JO': { price: '0.750', currency: 'JOD', symbol: 'د.ا', vat: 'No VAT' },
  'KZ': { price: '590.00', currency: 'KZT', symbol: '₸', vat: '12%' },
  'KE': { price: '200.00', currency: 'KES', symbol: 'KSh', vat: '16%' },
  'KW': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'KG': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LA': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LV': { price: '1.09', currency: 'EUR', symbol: '€', vat: '21%' },
  'LB': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LR': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LY': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LI': { price: '0.90', currency: 'CHF', symbol: 'CHF', vat: '8.1%' },
  'LT': { price: '1.09', currency: 'EUR', symbol: '€', vat: '21%' },
  'LU': { price: '1.09', currency: 'EUR', symbol: '€', vat: '17%' },
  'MO': { price: '8.88', currency: 'MOP', symbol: 'MOP$', vat: 'No VAT' },
  'MY': { price: '4.49', currency: 'MYR', symbol: 'RM', vat: '8%' },
  'MV': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'ML': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'MT': { price: '1.06', currency: 'EUR', symbol: '€', vat: '18%' },
  'MU': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'MX': { price: '22.00', currency: 'MXN', symbol: '$', vat: '16%' },
  'FM': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'MD': { price: '1.27', currency: 'USD', symbol: '$', vat: '20%' },
  'MC': { price: '1.09', currency: 'EUR', symbol: '€', vat: '20%' },
  'MN': { price: '3,740.00', currency: 'MNT', symbol: '₮', vat: 'No VAT' },
  'MA': { price: '11.99', currency: 'MAD', symbol: 'د.م.', vat: '20%' },
  'MZ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'MM': { price: '2,000', currency: 'MMK', symbol: 'K', vat: 'No VAT' },
  'NA': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'NP': { price: '1.20', currency: 'USD', symbol: '$', vat: '13%' },
  'NL': { price: '1.09', currency: 'EUR', symbol: '€', vat: '21%' },
  'NZ': { price: '2.09', currency: 'NZD', symbol: 'NZ$', vat: '15%' },
  'NI': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'NE': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'NG': { price: '1,650.00', currency: 'NGN', symbol: '₦', vat: '7.5%' },
  'MK': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'NO': { price: '13.00', currency: 'NOK', symbol: 'kr', vat: '25%' },
  'OM': { price: '0.99', currency: 'USD', symbol: '$', vat: '5%' },
  'PK': { price: '300', currency: 'PKR', symbol: '₨', vat: 'No VAT' },
  'PA': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'PG': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'PY': { price: '5,000', currency: 'PYG', symbol: '₲', vat: 'No VAT' },
  'PE': { price: '3.59', currency: 'PEN', symbol: 'S/', vat: 'No VAT' },
  'PH': { price: '70.00', currency: 'PHP', symbol: '₱', vat: '12%' },
  'PL': { price: '4.69', currency: 'PLN', symbol: 'zł', vat: '23%' },
  'PT': { price: '1.09', currency: 'EUR', symbol: '€', vat: '23%' },
  'QA': { price: '4.00', currency: 'QAR', symbol: 'ر.ق', vat: 'No VAT' },
  'RO': { price: '5.49', currency: 'RON', symbol: 'lei', vat: '21%' },
  'RU': { price: '85.00', currency: 'RUB', symbol: '₽', vat: 'No VAT' },
  'RW': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'WS': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SM': { price: '0.89', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'SA': { price: '4.59', currency: 'SAR', symbol: 'ر.س', vat: '15%' },
  'SN': { price: '700', currency: 'XOF', symbol: 'CFA', vat: '18%' },
  'RS': { price: '149', currency: 'RSD', symbol: 'дин', vat: '20%' },
  'SC': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SL': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SG': { price: '1.48', currency: 'SGD', symbol: 'S$', vat: '9%' },
  'SK': { price: '1.09', currency: 'EUR', symbol: '€', vat: '23%' },
  'SI': { price: '1.09', currency: 'EUR', symbol: '€', vat: '22%' },
  'SB': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SO': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'ZA': { price: '20.99', currency: 'ZAR', symbol: 'R', vat: '15%' },
  'KR': { price: '1,700', currency: 'KRW', symbol: '₩', vat: '10%' },
  'ES': { price: '1.09', currency: 'EUR', symbol: '€', vat: '21%' },
  'LK': { price: '325.00', currency: 'LKR', symbol: 'Rs', vat: 'No VAT' },
  'KN': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'LC': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SR': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'SE': { price: '12.00', currency: 'SEK', symbol: 'kr', vat: '25%' },
  'CH': { price: '0.80', currency: 'CHF', symbol: 'CHF', vat: 'No VAT' },
  'TW': { price: '35.00', currency: 'TWD', symbol: 'NT$', vat: '5%' },
  'TJ': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TZ': { price: '2,600.00', currency: 'TZS', symbol: 'TSh', vat: 'No VAT' },
  'TH': { price: '36.00', currency: 'THB', symbol: '฿', vat: '7%' },
  'TG': { price: '0.90', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'TO': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TT': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TN': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TC': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'TR': { price: '53.99', currency: 'TRY', symbol: '₺', vat: '20%' },
  'UG': { price: '1.25', currency: 'USD', symbol: '$', vat: '18%' },
  'UA': { price: '54.99', currency: 'UAH', symbol: '₴', vat: '20%' },
  'AE': { price: '4.09', currency: 'AED', symbol: 'د.إ', vat: '5%' },
  'GB': { price: '0.99', currency: 'GBP', symbol: '£', vat: '20%' },
  'US': { price: '0.99', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'UY': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'UZ': { price: '1.19', currency: 'USD', symbol: '$', vat: '12%' },
  'VU': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'VA': { price: '0.89', currency: 'EUR', symbol: '€', vat: 'No VAT' },
  'VE': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'VN': { price: '28,000', currency: 'VND', symbol: '₫', vat: 'No VAT' },
  'YE': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'ZM': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' },
  'ZW': { price: '1.06', currency: 'USD', symbol: '$', vat: 'No VAT' }
};

// Default pricing (fallback to US pricing)
const DEFAULT_PRICING = PRICING_DATA['US'];

// Timezone to country code mapping (privacy-friendly, no external API calls)
const TIMEZONE_TO_COUNTRY = {
  // Europe
  'Europe/London': 'GB',
  'Europe/Paris': 'FR',
  'Europe/Berlin': 'DE',
  'Europe/Madrid': 'ES',
  'Europe/Rome': 'IT',
  'Europe/Amsterdam': 'NL',
  'Europe/Brussels': 'BE',
  'Europe/Vienna': 'AT',
  'Europe/Stockholm': 'SE',
  'Europe/Copenhagen': 'DK',
  'Europe/Oslo': 'NO',
  'Europe/Helsinki': 'FI',
  'Europe/Dublin': 'IE',
  'Europe/Lisbon': 'PT',
  'Europe/Athens': 'GR',
  'Europe/Warsaw': 'PL',
  'Europe/Prague': 'CZ',
  'Europe/Budapest': 'HU',
  'Europe/Bucharest': 'RO',
  'Europe/Sofia': 'BG',
  'Europe/Zagreb': 'HR',
  'Europe/Tallinn': 'EE',
  'Europe/Riga': 'LV',
  'Europe/Vilnius': 'LT',
  'Europe/Zurich': 'CH',
  'Europe/Luxembourg': 'LU',
  'Europe/Monaco': 'MC',
  'Europe/Bratislava': 'SK',
  'Europe/Ljubljana': 'SI',
  'Europe/Belgrade': 'RS',
  'Europe/Kyiv': 'UA',
  'Europe/Minsk': 'BY',
  'Europe/Moscow': 'RU',
  'Europe/Istanbul': 'TR',
  'Europe/Reykjavik': 'IS',

  // Americas
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Anchorage': 'US',
  'America/Toronto': 'CA',
  'America/Vancouver': 'CA',
  'America/Edmonton': 'CA',
  'America/Halifax': 'CA',
  'America/Mexico_City': 'MX',
  'America/Sao_Paulo': 'BR',
  'America/Argentina/Buenos_Aires': 'AR',
  'America/Santiago': 'CL',
  'America/Bogota': 'CO',
  'America/Lima': 'PE',
  'America/Caracas': 'VE',
  'America/Montevideo': 'UY',
  'America/Asuncion': 'PY',
  'America/La_Paz': 'BO',
  'America/Guayaquil': 'EC',
  'America/Costa_Rica': 'CR',
  'America/Panama': 'PA',
  'America/Guatemala': 'GT',
  'America/Managua': 'NI',
  'America/El_Salvador': 'SV',
  'America/Tegucigalpa': 'HN',
  'America/Jamaica': 'JM',
  'America/Havana': 'CU',
  'America/Santo_Domingo': 'DO',

  // Asia
  'Asia/Tokyo': 'JP',
  'Asia/Seoul': 'KR',
  'Asia/Hong_Kong': 'HK',
  'Asia/Singapore': 'SG',
  'Asia/Bangkok': 'TH',
  'Asia/Jakarta': 'ID',
  'Asia/Manila': 'PH',
  'Asia/Kolkata': 'IN',
  'Asia/Dubai': 'AE',
  'Asia/Riyadh': 'SA',
  'Asia/Tel_Aviv': 'IL',
  'Asia/Jerusalem': 'IL',
  'Asia/Karachi': 'PK',
  'Asia/Dhaka': 'BD',
  'Asia/Kuala_Lumpur': 'MY',
  'Asia/Taipei': 'TW',
  'Asia/Ho_Chi_Minh': 'VN',
  'Asia/Baku': 'AZ',
  'Asia/Tbilisi': 'GE',
  'Asia/Yerevan': 'AM',
  'Asia/Baghdad': 'IQ',
  'Asia/Kuwait': 'KW',
  'Asia/Qatar': 'QA',
  'Asia/Bahrain': 'BH',
  'Asia/Muscat': 'OM',
  'Asia/Amman': 'JO',
  'Asia/Beirut': 'LB',
  'Asia/Colombo': 'LK',
  'Asia/Kathmandu': 'NP',
  'Asia/Tashkent': 'UZ',
  'Asia/Almaty': 'KZ',
  'Asia/Bishkek': 'KG',
  'Asia/Ulaanbaatar': 'MN',

  // Oceania
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Adelaide': 'AU',
  'Pacific/Auckland': 'NZ',
  'Pacific/Fiji': 'FJ',

  // Africa
  'Africa/Cairo': 'EG',
  'Africa/Johannesburg': 'ZA',
  'Africa/Lagos': 'NG',
  'Africa/Nairobi': 'KE',
  'Africa/Casablanca': 'MA',
  'Africa/Algiers': 'DZ',
  'Africa/Tunis': 'TN',
  'Africa/Accra': 'GH',
  'Africa/Khartoum': 'SD',
  'Africa/Addis_Ababa': 'ET',
  'Africa/Dar_es_Salaam': 'TZ',
  'Africa/Kampala': 'UG',
  'Africa/Kigali': 'RW'
};

/**
 * Safe localStorage wrapper to handle exceptions in private browsing
 * @param {string} operation - 'get' or 'set'
 * @param {string} key - Storage key
 * @param {string} value - Value to set (for 'set' operation)
 * @returns {string|null} Value for 'get' operation, null on error
 */
function safeLocalStorage(operation, key, value = null) {
  try {
    if (operation === 'get') {
      return localStorage.getItem(key);
    }
    if (operation === 'set') {
      localStorage.setItem(key, value);
      return value;
    }
  } catch (e) {
    console.warn('localStorage unavailable:', e.message);
    return null;
  }
}

/**
 * Detects the user's country code using privacy-friendly methods (no external APIs)
 * @returns {string} Two-letter country code
 */
function detectCountryCode() {
  try {
    // Check if user has previously selected a country
    const storedCountry = safeLocalStorage('get', 'userCountry');
    if (storedCountry && PRICING_DATA[storedCountry]) {
      return storedCountry;
    }

    // Method 1: Try to detect from timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TIMEZONE_TO_COUNTRY[timezone]) {
      return TIMEZONE_TO_COUNTRY[timezone];
    }

    // Method 2: Use browser language/locale (improved to handle various formats)
    const language = navigator.language || navigator.userLanguage;
    if (language) {
      // Handle both xx-YY and xx_YY formats, and complex formats like zh-Hans-CN
      const parts = language.replace('_', '-').split('-');
      // Get the last part which is typically the country code
      const countryCode = parts[parts.length - 1].toUpperCase();
      if (countryCode.length === 2 && PRICING_DATA[countryCode]) {
        return countryCode;
      }
    }

    return 'US'; // Final fallback
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'US';
  }
}

/**
 * Gets pricing information for a specific country
 * @param {string} countryCode - Two-letter country code
 * @returns {Object} Pricing information
 */
function getPricingForCountry(countryCode) {
  return PRICING_DATA[countryCode] || DEFAULT_PRICING;
}

/**
 * Formats the price display text
 * @param {Object} pricing - Pricing object
 * @param {boolean} includeRegion - Whether to include "(Android)" text
 * @returns {string} Formatted price text
 */
function formatPriceText(pricing, includeRegion = true) {
  const priceText = `${pricing.symbol}${pricing.price}`;
  return includeRegion ? `Get Started - ${priceText} (Android)` : `${priceText}`;
}

/**
 * Updates all pricing elements on the page
 * @param {Object} pricing - Pricing object
 */
function updatePagePricing(pricing) {
  // Update all CTA buttons with pricing - using nth-child(2) for more robust selection
  const ctaButtons = document.querySelectorAll('.btn-primary span:nth-child(2)');
  ctaButtons.forEach(button => {
    button.textContent = formatPriceText(pricing, true);
  });

  // Update the text in the final CTA section - more specific selector
  const finalCtaSections = document.querySelectorAll('.features-section');
  finalCtaSections.forEach(section => {
    const paragraph = section.querySelector('p[style*="margin-bottom"]');
    if (paragraph && paragraph.textContent.includes('Just')) {
      const priceDisplay = `${pricing.symbol}${pricing.price}`;
      paragraph.textContent = `Join thousands of couples planning stress-free weddings. Just ${priceDisplay}—once, for life.`;
    }
  });

  console.log(`Pricing updated to ${pricing.symbol}${pricing.price} (${pricing.currency})`);
}

/**
 * Initializes dynamic pricing on page load
 */
function initializePricing() {
  try {
    // Detect country
    const countryCode = detectCountryCode();
    console.log('Detected country code:', countryCode);

    // Get pricing for detected country
    const pricing = getPricingForCountry(countryCode);

    // Update page with new pricing
    updatePagePricing(pricing);

    // Store in localStorage for consistency (with error handling)
    safeLocalStorage('set', 'userCountry', countryCode);
    safeLocalStorage('set', 'userPricing', JSON.stringify(pricing));
  } catch (error) {
    console.error('Error initializing pricing:', error);
    // Fallback to default pricing
    updatePagePricing(DEFAULT_PRICING);
  }
}

// Initialize pricing when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePricing);
} else {
  initializePricing();
}
