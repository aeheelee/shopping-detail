import { createPortal } from 'react-dom';

const CreatePortal = ({
  el = '#root',
  children,
}: {
  el?: string;
  children: JSX.Element | (JSX.Element | undefined | boolean)[] | boolean;
}) => {
  const target = document.querySelector(el) as HTMLDivElement;
  if (!target) return null;
  return createPortal(children, target);
};

export default CreatePortal;
