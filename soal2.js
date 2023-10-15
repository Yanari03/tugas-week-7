// soal2.js

const fs = require("fs");

const logData = "Ini adalah contoh log.\n";

fs.writeFile("log.txt", logData, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Log berhasil ditulis ke dalam file.");
});
