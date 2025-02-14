import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message : "Type your URL : ",
      name : "url",
    },

    {
      type : "input",
      name : "filename",
      message : "Type your file name : ",
    }
  ])

  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_"+ answers.filename + ".png"));
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });