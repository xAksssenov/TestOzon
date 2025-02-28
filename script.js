document.addEventListener("DOMContentLoaded", () => {
  const ringBlock = document.getElementById("ringBlock");
  const ringProgress = document.getElementById("ringMain");

  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");

  function updateProgress(value) {
    const length = 2 * Math.PI * 60;
    const offset = length - (value / 100) * length;
    ringProgress.style.strokeDasharray = `${length - offset} ${length}`;
  }

  valueInput.addEventListener("input", (e) => {
    let value = Math.min(100, Math.max(0, e.target.value));
    updateProgress(value);
  });

  animateToggle.addEventListener("change", (e) => {
    if (e.target.checked) ringProgress.classList.add();
    else ringProgress.classList.remove();
  });

  hideToggle.addEventListener("change", (e) => {
    ringBlock.classList.toggle("progress__hidden", e.target.checked);
  });
});
