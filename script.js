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
    let value = Number(e.target.value);

    if (checkValue(value)) {
      errorRingValue.classList.remove("progress__visible");
      updateProgress(value);
    } else {
      errorRingValue.classList.add("progress__visible");
    }
  });

  animateToggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      ringProgress.classList.add("progress__animated");
      valueInput.value = 0;
      valueInput.disabled = true;
    } else {
      ringProgress.classList.remove("progress__animated");
      updateProgress(0);
      valueInput.disabled = false;
    }
  });

  hideToggle.addEventListener("change", (e) => {
    ringBlock.classList.toggle("progress__hidden", e.target.checked);
    valueInput.value = 0;
    updateProgress(0);
    e.target.checked
      ? (valueInput.disabled = true)
      : (valueInput.disabled = false);
  });
});
