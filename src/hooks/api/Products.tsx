import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/constants';
import { ProductType } from '../../types/CommonTypes';

/**
 * 카테고리 정보를 가지고 옵니다.
 *
 * @returns
 */
const fetchProducts = async (): Promise<ProductType> => {
  try {
    const url = API_BASE_URL + '/products?page=1&limit=10';
    const response = await axios.get<ProductType>(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Network error');
  }
};

/**
 * 카테고리 정보를 관리 합니다.
 *
 * @returns
 */
export const useProducts = () => {
  return useQuery<ProductType>({ queryKey: ['products'], queryFn: fetchProducts });
};
