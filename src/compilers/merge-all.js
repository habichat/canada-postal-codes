const fs = require("fs");
let unorderedData = {};

const dir = `${__dirname}/../json/`;
fs.readdir(dir, (err, files) => {
  return new Promise((resolve, reject) => {
    if (err) reject(err);
    files.forEach((file) => {
      console.log(file);
      let content = require(`${dir}${file}`);
      unorderedData = { ...unorderedData, ...content };
    });
    resolve(unorderedData);
  }).then((unorderedData) => {
    const orderedData = {};
    Object.keys(unorderedData)
      .sort()
      .forEach((key) => (orderedData[key] = unorderedData[key]));
    fs.writeFileSync(
      `${__dirname}/../json/_all.json`,
      JSON.stringify(orderedData)
    );
  });
});
