// import { PriceHistoryItem, Product } from "@/types";

// const Notification = {
//   WELCOME: 'WELCOME',
//   CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
//   LOWEST_PRICE: 'LOWEST_PRICE',
//   THRESHOLD_MET: 'THRESHOLD_MET',
// }

// const THRESHOLD_PERCENTAGE = 40;

// // Extracts and returns the price from a list of possible elements.
// export function extractPrice(...elements: any) {
//   for (const element of elements) {
//     const priceText = element.text().trim();

//     if(priceText) {
//       const cleanPrice = priceText.replace(/[^\d.]/g, '');

//       let firstPrice; 

//       if (cleanPrice) {
//         firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
//       } 

//       return firstPrice || cleanPrice;
//     }
//   }

//   return '';
// }

// // Extracts and returns the currency symbol from an element.
// export function extractCurrency(element: any) {
//   const currencyText = element.text().trim().slice(0, 1);
//   return currencyText ? currencyText : "";
// }

// // Extracts description from two possible elements from amazon
// export function extractDescription($: any) {
//   // these are possible elements holding description of the product
//   const selectors = [
//     ".a-unordered-list .a-list-item",
//     ".a-expander-content p",
//     // Add more selectors here if needed
//   ];

//   for (const selector of selectors) {
//     const elements = $(selector);
//     if (elements.length > 0) {
//       const textContent = elements
//         .map((_: any, element: any) => $(element).text().trim())
//         .get()
//         .join("\n");
//       return textContent;
//     }
//   }

//   // If no matching elements were found, return an empty string
//   return "";
// }

// export function getHighestPrice(priceList: PriceHistoryItem[]) {
//   let highestPrice = priceList[0];

//   for (let i = 0; i < priceList.length; i++) {
//     if (priceList[i].price > highestPrice.price) {
//       highestPrice = priceList[i];
//     }
//   }

//   return highestPrice.price;
// }

// export function getLowestPrice(priceList: PriceHistoryItem[]) {
//   let lowestPrice = priceList[0];

//   for (let i = 0; i < priceList.length; i++) {
//     if (priceList[i].price < lowestPrice.price) {
//       lowestPrice = priceList[i];
//     }
//   }

//   return lowestPrice.price;
// }

// export function getAveragePrice(priceList: PriceHistoryItem[]) {
//   const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
//   const averagePrice = sumOfPrices / priceList.length || 0;

//   return averagePrice;
// }

// export const getEmailNotifType = (
//   scrapedProduct: Product,
//   currentProduct: Product
// ) => {
//   const lowestPrice = getLowestPrice(currentProduct.priceHistory);

//   if (scrapedProduct.currentPrice < lowestPrice) {
//     return Notification.LOWEST_PRICE as keyof typeof Notification;
//   }
//   if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
//     return Notification.CHANGE_OF_STOCK as keyof typeof Notification;
//   }
//   if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
//     return Notification.THRESHOLD_MET as keyof typeof Notification;
//   }

//   return null;
// };

// export const formatNumber = (num: number = 0) => {
//   return num.toLocaleString(undefined, {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });
// };


// import { PriceHistoryItem, Product } from "@/types";

// const Notification = {
//   WELCOME: 'WELCOME',
//   CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
//   LOWEST_PRICE: 'LOWEST_PRICE',
//   THRESHOLD_MET: 'THRESHOLD_MET',
// }

// const THRESHOLD_PERCENTAGE = 40;

// // Extracts and returns the price from a list of possible elements.
// export function extractPrice(...elements: any[]): string {
//   for (const element of elements) {
//     const priceText = element.text().trim();

//     if (priceText) {
//       const cleanPrice = priceText.replace(/[^\d.]/g, '');

//       let firstPrice; 

//       if (cleanPrice) {
//         firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
//       } 

//       return firstPrice || cleanPrice;
//     }
//   }

//   return '';
// }

// // Extracts and returns the currency symbol from an element.
// export function extractCurrency(element: any): string {
//   const currencyText = element.text().trim().slice(0, 1);
//   return currencyText || "";
// }

// // Extracts description from two possible elements from amazon
// export function extractDescription($: any): string {
//   // these are possible elements holding description of the product
//   const selectors = [
//     ".a-unordered-list .a-list-item",
//     ".a-expander-content p",
//     // Add more selectors here if needed
//   ];

//   for (const selector of selectors) {
//     const elements = $(selector);
//     if (elements.length > 0) {
//       const textContent = elements
//         .map((_: any, element: any) => $(element).text().trim())
//         .get()
//         .join("\n");
//       return textContent;
//     }
//   }

//   // If no matching elements were found, return an empty string
//   return "";
// }

// export function getHighestPrice(priceList: PriceHistoryItem[]): number {
//   return priceList.reduce((highest, item) => item.price > highest ? item.price : highest, priceList[0].price);
// }

// export function getLowestPrice(priceList: PriceHistoryItem[]): number {
//   return priceList.reduce((lowest, item) => item.price < lowest ? item.price : lowest, priceList[0].price);
// }

// export function getAveragePrice(priceList: PriceHistoryItem[]): number {
//   const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
//   return priceList.length ? sumOfPrices / priceList.length : 0;
// }

// export const getEmailNotifType = (
//   scrapedProduct: Product,
//   currentProduct: Product
// ): keyof typeof Notification | null => {
//   const lowestPrice = getLowestPrice(currentProduct.priceHistory);

//   if (scrapedProduct.currentPrice < lowestPrice) {
//         return Notification.LOWEST_PRICE as keyof typeof Notification;
//       }
//       if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
//         return Notification.CHANGE_OF_STOCK as keyof typeof Notification;
//       }
//       if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
//         return Notification.THRESHOLD_MET as keyof typeof Notification;
//       }

//   return null;
// };

// export const formatNumber = (num: number = 0): string => {
//   return num.toLocaleString(undefined, {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });
// };


// import { PriceHistoryItem, Product } from "@/types";

// const Notification = {
//   WELCOME: 'WELCOME',
//   CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
//   LOWEST_PRICE: 'LOWEST_PRICE',
//   THRESHOLD_MET: 'THRESHOLD_MET',
// };

// const THRESHOLD_PERCENTAGE = 40;

// // Extracts and returns the price from a list of possible elements.
// export function extractPrice(...elements: any[]): string {
//   for (const element of elements) {
//     const priceText = element.text().trim();

//     if (priceText) {
//       const cleanPrice = priceText.replace(/[^\d.]/g, '');

//       const firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];

//       if (firstPrice) {
//         return firstPrice;
//       } else if (cleanPrice) {
//         return cleanPrice;
//       }
//     }
//   }

//   return '';
// }

// // Extracts and returns the currency symbol from an element.
// export function extractCurrency(element: any): string {
//   const currencyText = element.text().trim().slice(0, 1);
//   return currencyText || "";
// }

// // Extracts description from two possible elements from amazon
// export function extractDescription($: any): string {
//   // these are possible elements holding description of the product
//   const selectors = [
//     ".a-unordered-list .a-list-item",
//     ".a-expander-content p",
//     // Add more selectors here if needed
//   ];

//   for (const selector of selectors) {
//     const elements = $(selector);
//     if (elements.length > 0) {
//       const textContent = elements
//         .map((_: any, element: any) => $(element).text().trim())
//         .get()
//         .join("\n");
//       return textContent;
//     }
//   }

//   // If no matching elements were found, return an empty string
//   return "";
// }

// export function getHighestPrice(priceList: PriceHistoryItem[]): number {
//   return priceList.reduce((highest, item) => item.price > highest ? item.price : highest, priceList[0]?.price || 0);
// }

// export function getLowestPrice(priceList: PriceHistoryItem[]): number {
//   return priceList.reduce((lowest, item) => item.price < lowest ? item.price : lowest, priceList[0]?.price || 0);
// }

// export function getAveragePrice(priceList: PriceHistoryItem[]): number {
//   if (priceList.length === 0) return 0;
//   const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
//   return sumOfPrices / priceList.length;
// }

// export const getEmailNotifType = (
//   scrapedProduct: Product,
//   currentProduct: Product
// ): keyof typeof Notification | null => {
//   const lowestPrice = getLowestPrice(currentProduct.priceHistory);

//   if (scrapedProduct.currentPrice < lowestPrice) {
//             return Notification.LOWEST_PRICE as keyof typeof Notification;
//           }
//           if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
//             return Notification.CHANGE_OF_STOCK as keyof typeof Notification;
//           }
//           if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
//             return Notification.THRESHOLD_MET as keyof typeof Notification;
//           }

//   return null;
// };

// export const formatNumber = (num: number = 0): string => {
//   return num.toLocaleString(undefined, {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });
// };


// import { PriceHistoryItem, Product } from "@/types";

// const Notification = {
//   WELCOME: 'WELCOME',
//   CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
//   LOWEST_PRICE: 'LOWEST_PRICE',
//   THRESHOLD_MET: 'THRESHOLD_MET',
// };

// const THRESHOLD_PERCENTAGE = 40;

// // Extracts and returns the price from a list of possible elements.
// export function extractPrice(...elements: any[]): string {
//   for (const element of elements) {
//     const priceText = element.text().trim();
//     console.log('Price Text:', priceText);

//     if (priceText) {
//       const cleanPrice = priceText.replace(/[^\d.]/g, '');
//       console.log('Clean Price:', cleanPrice);

//       const firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
//       console.log('First Price:', firstPrice);

//       if (firstPrice) {
//         return firstPrice;
//       } else if (cleanPrice) {
//         return cleanPrice;
//       }
//     }
//   }

//   return '';
// }

// // Extracts and returns the currency symbol from an element.
// export function extractCurrency(element: any): string {
//   const currencyText = element.text().trim().slice(0, 1);
//   console.log('Currency Text:', currencyText);
//   return currencyText || "";
// }

// // Extracts description from two possible elements from amazon
// export function extractDescription($: any): string {
//   // these are possible elements holding description of the product
//   const selectors = [
//     ".a-unordered-list .a-list-item",
//     ".a-expander-content p",
//     // Add more selectors here if needed
//   ];

//   for (const selector of selectors) {
//     const elements = $(selector);
//     if (elements.length > 0) {
//       const textContent = elements
//         .map((_: any, element: any) => $(element).text().trim())
//         .get()
//         .join("\n");
//       console.log('Description Text:', textContent);
//       return textContent;
//     }
//   }

//   // If no matching elements were found, return an empty string
//   return "";
// }

// export function getHighestPrice(priceList: PriceHistoryItem[]): number {
//   if (priceList.length === 0) {
//     console.error('Price list is empty');
//     return 0;
//   }

//   const highestPrice = priceList.reduce((highest, item) => item.price > highest ? item.price : highest, priceList[0].price);
//   console.log('Highest Price:', highestPrice);
//   return highestPrice;
// }

// export function getLowestPrice(priceList: PriceHistoryItem[]): number {
//   if (priceList.length === 0) {
//     console.error('Price list is empty');
//     return 0;
//   }

//   const lowestPrice = priceList.reduce((lowest, item) => item.price < lowest ? item.price : lowest, priceList[0].price);
//   console.log('Lowest Price:', lowestPrice);
//   return lowestPrice;
// }

// export function getAveragePrice(priceList: PriceHistoryItem[]): number {
//   if (priceList.length === 0) {
//     console.error('Price list is empty');
//     return 0;
//   }

//   const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
//   const averagePrice = sumOfPrices / priceList.length;
//   console.log('Average Price:', averagePrice);
//   return averagePrice;
// }

// export const getEmailNotifType = (
//   scrapedProduct: Product,
//   currentProduct: Product
// ): keyof typeof Notification | null => {
//   const lowestPrice = getLowestPrice(currentProduct.priceHistory);

//   if (scrapedProduct.currentPrice < lowestPrice) {
//     console.log('Notification: LOWEST_PRICE');
//     return Notification.LOWEST_PRICE;
//   }
//   if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
//     console.log('Notification: CHANGE_OF_STOCK');
//     return Notification.CHANGE_OF_STOCK;
//   }
//   if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
//     console.log('Notification: THRESHOLD_MET');
//     return Notification.THRESHOLD_MET;
//   }

//   return null;
// };

// export const formatNumber = (num: number = 0): string => {
//   const formattedNumber = num.toLocaleString(undefined, {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });
//   console.log('Formatted Number:', formattedNumber);
//   return formattedNumber;
// };



import { PriceHistoryItem, Product } from "@/types";

const Notification = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
} as const;

const THRESHOLD_PERCENTAGE = 40;

// Extracts and returns the price from a list of possible elements.
export function extractPrice(...elements: any[]): string {
  for (const element of elements) {
    const priceText = element.text().trim();
    console.log('Price Text:', priceText);

    if (priceText) {
      const cleanPrice = priceText.replace(/[^\d.]/g, '');
      console.log('Clean Price:', cleanPrice);

      const firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
      console.log('First Price:', firstPrice);

      if (firstPrice) {
        return firstPrice;
      } else if (cleanPrice) {
        return cleanPrice;
      }
    }
  }

  return '';
}

// Extracts and returns the currency symbol from an element.
export function extractCurrency(element: any): string {
  const currencyText = element.text().trim().slice(0, 1);
  console.log('Currency Text:', currencyText);
  return currencyText || "";
}

// Extracts description from two possible elements from amazon
export function extractDescription($: any): string {
  // these are possible elements holding description of the product
  const selectors = [
    ".a-unordered-list .a-list-item",
    ".a-expander-content p",
    // Add more selectors here if needed
  ];

  for (const selector of selectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      const textContent = elements
        .map((_: any, element: any) => $(element).text().trim())
        .get()
        .join("\n");
      console.log('Description Text:', textContent);
      return textContent;
    }
  }

  // If no matching elements were found, return an empty string
  return "";
}

export function getHighestPrice(priceList: PriceHistoryItem[]): number {
  if (priceList.length === 0) {
    console.error('Price list is empty');
    return 0;
  }

  const highestPrice = priceList.reduce((highest, item) => item.price > highest ? item.price : highest, priceList[0].price);
  console.log('Highest Price:', highestPrice);
  return highestPrice;
}

export function getLowestPrice(priceList: PriceHistoryItem[]): number {
  if (priceList.length === 0) {
    console.error('Price list is empty');
    return 0;
  }

  const lowestPrice = priceList.reduce((lowest, item) => item.price < lowest ? item.price : lowest, priceList[0].price);
  console.log('Lowest Price:', lowestPrice);
  return lowestPrice;
}

export function getAveragePrice(priceList: PriceHistoryItem[]): number {
  if (priceList.length === 0) {
    console.error('Price list is empty');
    return 0;
  }

  const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
  const averagePrice = sumOfPrices / priceList.length;
  console.log('Average Price:', averagePrice);
  return averagePrice;
}

export const getEmailNotifType = (
  scrapedProduct: Product,
  currentProduct: Product
): keyof typeof Notification | null => {
  const lowestPrice = getLowestPrice(currentProduct.priceHistory);

  if (scrapedProduct.currentPrice < lowestPrice) {
    console.log('Notification: LOWEST_PRICE');
    return 'LOWEST_PRICE';
  }
  if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
    console.log('Notification: CHANGE_OF_STOCK');
    return 'CHANGE_OF_STOCK';
  }
  if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
    console.log('Notification: THRESHOLD_MET');
    return 'THRESHOLD_MET';
  }

  return null;
};

export const formatNumber = (num: number = 0): string => {
  const formattedNumber = num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  console.log('Formatted Number:', formattedNumber);
  return formattedNumber;
};

