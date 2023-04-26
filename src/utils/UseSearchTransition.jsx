import { useTransition } from "react-spring";

const useSearchTransition = (isSearchForm) => {
  const searchTransition = useTransition(isSearchForm, {
    from: { x: 230, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 230, opacity: 0 },
  });
  return searchTransition;
};

export default useSearchTransition;
