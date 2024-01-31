import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '.';
import { API_BASE_URL } from '../../constants/constants';
import { CategoryType } from '../../types/CommonTypes';

// category 정보를 가져오고 관리 합니다.
export const useCategories = () => {
  const url = API_BASE_URL + '/categories';
  const fetchCategories = (): Promise<CategoryType> => fetchApi(url);

  const { data: categoryData } = useQuery<CategoryType>({ queryKey: ['categories'], queryFn: () => fetchCategories() });

  if (!categoryData) {
    return { categoryData: undefined, filterData: [], categoryMenu: [] };
  }

  // filter 관련 data
  const {
    product,
    searchFilter: { price, discount },
  } = categoryData;

  const priceData = price.map((item) => ({
    ...item,
    title: `₩${item.min.toLocaleString()} ~ ₩${item.max.toLocaleString()}`,
  }));
  const discountData = discount.map((item) => ({ ...item, title: `${item.min}% ~ ${item.max}%` }));

  const filterData = [
    { type: 'product', title: '상품별', data: [{ id: 0, title: '전체' }, ...product] },
    { type: 'price', title: '가격별', data: [{ id: 0, title: '전체' }, ...priceData] },
    { type: 'discount', title: '할인별', data: [{ id: 0, title: '전체' }, ...discountData] },
  ];

  // category menu 관련 data
  const categoryMenu = [
    {
      id: 0,
      category: '',
      title: '전체',
      imageUrl:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    ...categoryData.product,
  ];

  return { categoryData, filterData, categoryMenu };
};
