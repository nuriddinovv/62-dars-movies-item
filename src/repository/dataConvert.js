export function convertDate(e) {
  const date = new Date(e);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(/ /g, " ");
  return formattedDate;
}
