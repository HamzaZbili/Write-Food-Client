export default function queryBuilder(searchParams) {
  let categoryQuery = "";
  let cityQuery = "";
  let orderQuery = "";
  let titleQuery = "";
  if (searchParams?.category) {
    categoryQuery = `&category=${searchParams.category}`;
  }
  if (searchParams?.city) {
    cityQuery = `&city=${searchParams.city}`;
  }
  if (searchParams?.order) {
    orderQuery = `&order=${searchParams.order}`;
  }
  if (searchParams?.title) {
    titleQuery = `&search=${searchParams.title}`;
  }
  const completeQuery = categoryQuery + cityQuery + orderQuery + titleQuery;
  return completeQuery;
}
