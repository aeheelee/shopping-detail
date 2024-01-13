export const API_BASE_URL = 'https://cozshopping.codestates-seb.link/api/v3';

export const CATEGORIES_TYPES = {
  PRODUCT: '상품별',
  PRICE: '가격별',
  DISCOUNT: '할인별',
} as const;

export type CATEGORIES_TYPES_TYPE = (typeof CATEGORIES_TYPES)[keyof typeof CATEGORIES_TYPES];
