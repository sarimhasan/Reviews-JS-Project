const reviews = [
  {
    id: 1,
    img: "https://iili.io/Ja29RbS.jpg",
    name: "Joe Washington",
    job: "Owner",
    review:
      "Really recommend this company, good prices for short term insurance. I made a slight error on my details and they were quick to help me and resolve the issue. Will definitely use again in future and will recommend to friends.",
  },
  {
    id: 2,
    img: "https://iili.io/Ja2dbkv.jpg",
    name: "Emily Wales",
    job: "Senior Manager",
    review:
      "Made a mistake on selected dates, and realised straight away but was told not possible to change policy at all and also non-refundable. Cover hadn't even started yet so no loss to the underwriters, feels like blatant profiteering as had to get a new policy with new dates.",
  },
  {
    id: 3,
    img: "https://iili.io/Ja22Bp4.jpg",
    name: "Emilia Avelena",
    job: "Graphic Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa neque molestias unde atque illum impedit deleniti hic, blanditiis modi nam aperiam eaque tenetur dolore aut odio temporibus aspernatur dolorem.",
  },
  {
    id: 4,
    img: "https://iili.io/Ja22Ojp.jpg",
    name: "Tom Nathan",
    job: "Intern",
    review:
      "The application for car insurance was incredibly efficient and smooth from start to finish.I will be very happy to use temp.cover again in the future 👍",
  },
];

// Selecting items
const img = document.querySelector(".img");
const name = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".surprise");

// Setting the innitial counter
let currentItem = 0;

// function for displaying the according information
function displayingInfo(itemNo) {
  const item = reviews[itemNo];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.review;
}

// Innitially loading an image
window.addEventListener("DOMContentLoaded", function () {
  displayingInfo(currentItem);
});

// Activating the sliders
nextBtn.addEventListener("click", function () {
  // console.log("You just pressed the next button");

  if (currentItem > reviews.length - 2) {
    currentItem = 0;
    displayingInfo(currentItem);
    // console.log(currentItem);
  } else {
    currentItem++;
    displayingInfo(currentItem);
    // console.log(currentItem);
  }
});

prevBtn.addEventListener("click", function () {
  // console.log("You just pressed the prev button");

  if (currentItem < 1) {
    currentItem = 3;
    displayingInfo(currentItem);
    // console.log(currentItem);
  } else {
    currentItem--;
    displayingInfo(currentItem);
    // console.log(currentItem);
  }
});

// Surprise me Button
surpriseBtn.addEventListener("click", function () {
  const randItemNo = Math.trunc(Math.random() * reviews.length);
  console.log(randItemNo);

  displayingInfo(randItemNo);
});
