// import { useCategories } from './useCategories';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/constants';
import { CategoryType } from '../../types/CommonTypes';

/**
 * 카테고리 정보를 관리 합니다.
 *
 * @returns
 */

export const useCategories = () => {
  const fetchCategories = async (): Promise<CategoryType> => {
    try {
      const url = API_BASE_URL + '/categories';
      const response = await axios.get<CategoryType>(url);
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : 'Network error');
    }
  };

  // 카테고리 API Return
  const categories = useQuery<CategoryType>({ queryKey: ['categories'], queryFn: fetchCategories });

  // 카테고리 내 필터 데이터 가공
  const filter = (responseData: CategoryType) => {
    const {
      product,
      searchFilter: { price, discount },
    } = responseData;

    const priceData = price.map((item) => ({
      ...item,
      title: `₩${item.min.toLocaleString()} ~ ₩${item.max.toLocaleString()}`,
    }));
    const discountData = discount.map((item) => ({ ...item, title: `${item.min}% ~ ${item.max}%` }));
    return [
      { type: 'product', title: '상품별', data: [{ id: 0, title: '전체' }, ...product] },
      { type: 'price', title: '가격별', data: [{ id: 0, title: '전체' }, ...priceData] },
      { type: 'discount', title: '할인별', data: [{ id: 0, title: '전체' }, ...discountData] },
    ];
  };

  const filterList = categories.data !== undefined && filter(categories.data);

  // 카테고리 내 카테고리 데이터 가공
  const product = (responseData: CategoryType) => {
    const { product } = responseData;
    return [
      {
        id: 0,
        category: '',
        title: '전체',
        imageUrl:
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      ...product,
    ];
  };

  const categoryList = categories.data !== undefined && product(categories.data);

  return { categoryList, filterList };
};
