import { atomWithReset } from 'jotai/utils';

/**
 * NOTE: 상태관리 라이브러리 비교
 * https://velog.io/@iberis/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B9%84%EA%B5%90-Redux-vs-Recoil-vs-Zustand-vs-Jotai
 */
interface IFilterProps {
  type: string;
  open: boolean;
}

const initialFilterState: IFilterProps[] = [
  { type: 'product', open: false },
  { type: 'price', open: false },
  { type: 'discount', open: false },
];

export const filtersDropDownAtom = atomWithReset<IFilterProps[]>(initialFilterState);
