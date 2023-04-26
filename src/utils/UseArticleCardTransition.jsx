import { useTransition } from "react-spring";

const useArticleCardTransition = () => {
  const articleCardTransition = useTransition({
    from: { x: 230, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 230, opacity: 0 },
  });
  return articleCardTransition;
};

export default useArticleCardTransition;
