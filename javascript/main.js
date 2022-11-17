import { consumeApi } from "./api.js";
import { createCards } from "./createCard.js";

document.addEventListener("DOMContentLoaded", async () => {
  let create = document.querySelector("#properties-menu");
  let propierties = await consumeApi();



  propierties.forEach((home) => {
    create.innerHTML += createCards(home);
  });


})
