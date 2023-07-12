const generateButton = document.getElementById("generate-btn");
const slider = document.getElementById("pass-lenght");
let passLengthRender = document.getElementById("passrender");
let result = document.getElementById("result");
let passLevel = document.getElementById("Pass-level");

// This Function displays the length of the password from the slider
function passLengthRenderer() {
  let sliderValue = Number(slider.value);
  passLengthRender.innerHTML = sliderValue;
  console.log(typeof sliderValue);

  // if more than 10
  if (slider.value < 10) {
    slider.classList.add("reached-value");
    passLevel.innerHTML = "Poor";
    passLevel.classList.add("not");
    console.log("ololoooo");

    // if less than 10
  }
  if (slider.value > 10) {
    slider.classList.remove("reached-value");
    slider.classList.add("medium");
    slider.classList.remove("good");
    passLevel.innerHTML = "Medium";
    passLevel.classList.remove("not");
    passLevel.classList.add("medium");

    // if more than 17
  }
  if (slider.value > 17) {
    slider.classList.remove("medium");
    slider.classList.remove("reached-value");
    slider.classList.add("good");
    passLevel.innerHTML = "Strong";
    passLevel.classList.remove("not");
    passLevel.classList.remove("medium");
    passLevel.classList.add("good");
  }
}

slider.addEventListener("input", passLengthRenderer);

function renderPassword() {
  let parameters = false;
  console.log("click");
  if ((parameters = false)) {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
}
generateButton.addEventListener("click", renderPassword);
