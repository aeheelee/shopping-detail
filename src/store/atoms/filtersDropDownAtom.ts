import { atomWithReset } from 'jotai/utils';

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
