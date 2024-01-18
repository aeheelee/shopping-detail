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
export async function fetchApi<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (err: unknown) {
    throw err as AxiosError;
  }
}
