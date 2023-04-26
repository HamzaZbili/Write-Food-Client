import { useTransition } from "react-spring";

const useArticleCardTransition = (article) => {
  const articleCardTransition = useTransition(article, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return articleCardTransition;
};

export default useArticleCardTransition;
