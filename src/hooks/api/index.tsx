import axios, { AxiosError } from 'axios';
import { QueryStringParams } from '../../constants/constants';

// key=value 문자열 받고 인코딩 수행
export function generateQueryString(params: QueryStringParams = {}) {
  return Object.keys(params)
    .map((key) => `${key}=${key === 'query' ? encodeURIComponent(String(params[key])) : params[key]}`)
    .join('&');
}

// url과 쿼리스트링 사용
export function generateUrl(url: string, params = {}) {
  const query = generateQueryString(params);
  return `${url}?${query ? `&${query}` : ''}`;
}

// fetch 함수
// 리뷰: axios.get 에서 query param을 쉽게 넘기는 방법이 있어 공유드려요
// https://axios-http.com/docs/req_config#params
// e.g. const response = await axios.get<ProductType>(url, { params: { limit: 10 } });
// query param을 제작하시는데 있어 generateQueryString 함수를 사용하고 계신데 이 부분이 다순하게 처리될 수 있어요.
export async function fetchApi<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (err: unknown) {
    throw err as AxiosError;
  }
}
