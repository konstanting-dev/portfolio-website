const fs = require('fs');
const pug = require('pug');

const data = require ('./data/projects.json');



data.project.forEach((p) => {
  const html = pug.renderFile('views/index.pug', p)
  fs.writeFile("dist/"+p.page+".html", html, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});
