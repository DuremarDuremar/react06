export function searchItems(items, term, arg) {
  if (!items) {
    return null;
  }

  if (term.length === 0) {
    return items;
  }

  return items.filter((item) => {
    if (arg === "first name") {
      return item.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1;
    } else if (arg === "last name") {
      return item.lastName.toLowerCase().indexOf(term.toLowerCase()) > -1;
    } else {
      return item.id.toString().indexOf(term) > -1;
    }
  });
}
