import axios, { AxiosError } from 'axios';
import { QueryStringParams } from '../../constants/constants';

export function generateQueryString(params: QueryStringParams = {}) {
  return Object.keys(params)
    .map((key) => `${key}=${key === 'keyword' ? encodeURIComponent(String(params[key])) : params[key]}`)
    .join('&');
}

export function generateUrl(url: string, params = {}) {
  const query = generateQueryString(params);
  return `${url}?${query ? `&${query}` : ''}`;
}

export async function fetchApi<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (err: unknown) {
    throw err as AxiosError;
  }
}
