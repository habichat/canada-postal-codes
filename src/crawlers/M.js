// https://en.wikipedia.org/wiki/List_of_postal_codes_of_Canada:_M
const tables = document.querySelectorAll("table");
const json = {};

tables[0]
  .querySelector("tbody")
  .querySelectorAll("tr")
  .forEach((tr) => {
    const tds = tr.querySelectorAll("td");
    json[tds[0].innerText] = `${tds[1].innerText} ${tds[2].innerText}`;
  });

console.log(json);
