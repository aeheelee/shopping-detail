import axios from 'axios';
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

/** fetch 함수
 * NOTE: AxiosError를 쓰는 이유?
 * throw new Error는 새로운 오류 객체를 생성하여 사용자 정의 메시지와 함께 예외를 발생시키는 데 사용됨 (디버깅을 위해 / 직관적으로)
 * throw err as AxiosError는 Axios 요청 중 발생한 오류의 상세 정보를 유지하면서 해당 오류를 다시 발생시키는 데 사용
 * throw new Error는 오류 메시지를 커스터마이즈 할 수 있으며, 오류 객체의 원래 세부 정보를 일부 손실할 수 있음
 * 서버에서 에러메세지가 있는 경우가 있음. (타입스크립트의 추론을보면)
 * response data를 json으로 파싱하지 않아도 데이터를 받아올 수 있으므로 axios를 사용한다. (생략되어있고, 사용하기 간편해서)
 */
export async function fetchApi<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    // throw err as AxiosError;
    throw new Error(error.response ? error.response.data : 'Network error');
  }
}
