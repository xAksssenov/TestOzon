document.addEventListener("DOMContentLoaded", () => {
  const ringBlock = document.getElementById("ringBlock");
  const ringProgress = document.getElementById("ringMain");
  const errorRingValue = document.getElementById("errorRingValue");

  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");

  function checkValue(value) {
    return value >= 0 && value <= 100;
  }

  function updateProgress(value) {
    const length = 2 * Math.PI * 60;
    const offset = length - (value / 100) * length;
    ringProgress.style.strokeDasharray = `${length - offset} ${length}`;
  }

  valueInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let value = Number(e.target.value);

    if (checkValue(value)) {
      errorRingValue.classList.remove("progress__visible");
      updateProgress(value);
    } else {
      errorRingValue.classList.add("progress__visible");
    }
  });

  animateToggle.addEventListener("change", (e) => {
    e.target.checked
      ? ringProgress.classList.add("progress__animated")
      : ringProgress.classList.remove("progress__animated");
  });

  hideToggle.addEventListener("change", (e) => {
    ringBlock.classList.toggle("progress__hidden", e.target.checked);
    ringProgress.classList.remove("progress__animated");
    animateToggle.checked = false;
    valueInput.value = 0;
    updateProgress(0);

    e.target.checked
      ? (valueInput.disabled = true)
      : (valueInput.disabled = false);
  });
});
