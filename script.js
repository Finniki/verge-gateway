const paymentContainer = document.querySelector(".payment-slides");
const paymentTab = document.querySelectorAll(".payment-slide");

const buttons = document.querySelectorAll(".button");
const buttonContainer = document.querySelector(".payment__options");
const PaymentSlide = document.querySelector(".payment_switch");

buttonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-pay");
  console.log(clicked.dataset.tab);
  // console.log(document.querySelector('.payment-slide__$'));

  //Guard clause
  if (!clicked) return;

  //hide all
  paymentTab.forEach((tab) => tab.classList.add("hidden"));

  //Activate clicked tab
  clicked.classList.remove("hidden");
  PaymentSlide.classList.remove("hidden");
  document
    .querySelector(`.payment-slide__${clicked.dataset.tab}`)
    .classList.remove("hidden");
});
