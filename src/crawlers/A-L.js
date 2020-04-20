// https://en.wikipedia.org/wiki/List_of_postal_codes_of_Canada:_A - L
const tables = document.querySelectorAll('table')
const json = {}

tables[3].querySelectorAll('td').forEach(td => {
  const text = td.innerText.replace(/(\r\n|\n|\r)/gm, " ")
  const singlespace = text.replace(/\s\s+/g, ' ')
  const postalCode = singlespace.substring(0, 3)
  const description = singlespace.substring(4)
  json[postalCode] = description
})

console.log(json)

