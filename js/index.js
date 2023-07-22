import BackGround from "../utils/BG.js";
import Hair from "../utils/HAIR.js";
import Face from "../utils/Face.js";
import Necklace from "../utils/Necklace.js";
import Shirt from "../utils/Shirt.js";
import Dress from "../utils/Dress.js";
import Shoes from "../utils/Shoes.js";
import Bags from "../utils/Bags.js";

const getElement = (selector) => {
  return document.querySelector(selector);
};

const display = () => {
  const arr = BackGround;
  render(arr, "#showBG");
  localStorage.setItem('dssp', JSON.stringify(arr))
}


getElement("#nav-home-tab").onclick = display

getElement("#nav-profile-tab").onclick = function () {
  const arr = Hair;
  render(arr, "#showHair");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-contact-tab").onclick = function () {
  const arr = Face;
  render(arr, "#showFace");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-necklace-tab").onclick = function () {
  const arr = Necklace;
  render(arr, "#showNecklace");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-shirt-tab").onclick = function () {
  const arr = Shirt;
  render(arr, "#showShirt");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-dress-tab").onclick = function () {
  const arr = Dress;
  render(arr, "#showDress");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-shoes-tab").onclick = function () {
  const arr = Shoes;
  render(arr, "#showShoes");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
getElement("#nav-bags-tab").onclick = function () {
  const arr = Bags;
  render(arr, "#showBags");
  localStorage.setItem('dssp', JSON.stringify(arr))
};
const render = (arr, selector) => {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    content += `
        <div class="col-3 mt-3">
                    <div class="content text-center">
                      <div class="content__img">
                        <img class="img-fluid" src=${item.image}>
                      </div>
                      <div class="content__text py-2">
                        <h5>${item.name}</h5>
                      </div>
                      <div class="content__button">
                        <button class="btn btn-success" onclick="editsValue(${item.id})">Try On</button>
                      </div>
                    </div>
                  </div>
        `;
  }
  getElement(selector).innerHTML = content;
};

window.editsValue = (id) => {
  const parseValue = JSON.parse(localStorage.getItem('dssp'))
  const check = parseValue.find((v) => v.id == id)
  if (check && check.type == "bg") {
    getElement('.background').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "bag") {
    getElement('.handbag').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "dress") {
    getElement('.bikinibottom').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "hair") {
    getElement('.hairstyle').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "shirt") {
    getElement('.bikinitop').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "necklace") {
    getElement('.necklace').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "shoes") {
    getElement('.feet').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
  if (check && check.type == "face") {
    getElement('.model').innerHTML =  `<image style="width:100%; height: 100%" src="${check.image}" ></image>`
  }
};

display()