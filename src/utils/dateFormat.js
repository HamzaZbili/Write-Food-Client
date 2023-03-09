export function formatDate(string) {
  const dateString = string;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-GB").split("/").join("/");
  return formattedDate; // outputs: 21/10/22
}
