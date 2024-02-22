let input = document.getElementById("email");
let form = document.getElementById("form");
let submit = document.querySelector(".submit-email");

let signupImage = document.querySelector(".signup-image");
let subscription = document.querySelector(".subscription");
let successMsg = document.querySelector(".success");
let dismissBtn = document.querySelector(".dismiss-btn");
let successEmail = document.querySelector(".success-email");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    signupImage.classList.add("hidden");
    subscription.classList.add("hidden");
    successMsg.classList.remove("hidden");
    successEmail.innerHTML = input.value;
  }
});

dismissBtn.addEventListener("click", () => {
  input.value = "";
  signupImage.classList.remove("hidden");
  subscription.classList.remove("hidden");
  successMsg.classList.add("hidden");
});

let array = [];

array.slice();
