/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["awesome", "cool", "intriguing", "thrilling", "funny"];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tlds = [
    ".com",
    ".de",
    ".space",
    ".rocks",
    ".barcelona",
    ".org",
    ".cat",
    ".dog"
  ];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  try {
    throw new Error("oh no, something broke!");
  } catch (error) {
    console.log(error);
  }

  document.querySelector("#generate").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    }</h1>`;
  };
};
