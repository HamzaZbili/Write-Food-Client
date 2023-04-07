import { useTransition } from "react-spring";

const useSearchTransition = (isSearchForm) => {
  const searchTransition = useTransition(isSearchForm, {
    from: { width: 0, height: 0, opacity: 0 },
    enter: { width: 200, height: 230, opacity: 1 },
    leave: { width: 0, height: 0, opacity: 0 },
  });
  return searchTransition;
};

export default useSearchTransition;
