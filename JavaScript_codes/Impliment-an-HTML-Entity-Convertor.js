// User Stories:

// You should have a convertHTML function that accepts a string as an argument.

// The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

// & should be converted to &amp;.
// < should be converted to &lt;.
// > should be converted to &gt;.
// " should be converted to &quot;.
// ' should be converted to &apos;.

function convertHTML(string) {
  const find = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let updated = string;

  for (let i = 0; i < Object.keys(find).length; i++) {
    if (updated.includes(Object.keys(find)[i])) {
      const key = Object.keys(find)[i];
      const value = Object.values(find)[i];
      updated = updated.replaceAll(key, value);
    }
  }
  return updated;
}
