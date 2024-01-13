// 공통 타입
/////////////////////////////////////////////
export interface PaginationType {
  maxPage: number;
  currentPage: number;
}

export interface PaginationResponse {
  maxPage: number;
  totalItems: number;
  currentPage: number;
  currentLimit: number;
  next: boolean;
}
/////////////////////////////////////////////

// 카테고리
export interface ProductCategoryType {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
}

// export interface RecomType {
//   id: number;
//   type: string;
// }

// export interface AgeType {
//   id: number;
//   type: string;
//   description: string;
// }

export interface SearchPriceFilterType {
  id: number;
  min: number;
  max: number;
}

export interface SearchDiscountFilterType {
  id: number;
  min: number;
  max: number;
}
export interface SearchFiltersType {
  price: SearchPriceFilterType[];
  discount: SearchDiscountFilterType[];
}

// 카테고리 타입
export interface CategoryType {
  product: ProductCategoryType[];
  searchFilter: SearchFiltersType;
  // recomType: RecomType[];
  // ageType: AgeType[];
}
/////////////////////////////////////////////

// 상품목록 타입
export interface ProductItemsType {
  id: number;
  type: string;
  title: string;
  subTitle?: null;
  brandName?: string | null;
  price: number;
  discountPercentage: number;
  discountPrice: number;
  imageUrl: string;
  brandImageUrl: null;
  category: {
    id: number;
    category: string;
  };
}

export interface ProductType {
  maxPage: number;
  totalItems: number;
  currentPage: number;
  next: boolean;
  items: ProductItemsType[];
}
