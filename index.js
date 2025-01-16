import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// const fs=require("fs");
inquirer.prompt([
  {
    name:"URL",
    message:"please enter the url of required qr-code",
  }
]).then((answers)=>{
  const qrStream=qr.image(answers.URL,{type:"png"});
  qrStream.pipe(fs.createWriteStream("qr-image.png"));
  console.log(answers.URL);
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});