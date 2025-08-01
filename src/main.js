import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const meter = document.querySelector("meter");
  const meterSlider = document.querySelector(".meter-slider");

  const dataStorageQtyUsedEl = document.querySelector(
    "[data-storage-qty-used]"
  );
  const dataStorageQtyUsed = meter.value;
  let currentDataStorageQtyUsed = 0;

  const dataStorageQtyLeftEl = document.querySelector(
    "[data-storage-qty-left]"
  );
  const dataStorageQtyLeft = meter.max - meter.value;
  let currentDataStorageQtyLeft = 0;

  function easeOutQuad(t) {
    return 1 - Math.pow(1 - t, 4); // Using a higher exponent for more pronounced easing
  }

  function animateCounter(counterElement, currentValue, maxValue) {
    let startTime = null;
    const duration = 3000; // Duration of the animation in milliseconds

    function updateCounter(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      currentValue = Math.floor(easedProgress * maxValue);
      counterElement.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function updateMeterSliderWidth() {
    const percentage = (meter.value / meter.max) * 100;
    // Calculate the minimum percentage width based on the parent element's width
    const wrapperWidth = meterSlider.parentElement.clientWidth;
    const minWidthPercentage = (20 / wrapperWidth) * 100;

    // Ensure the percentage is at least the minimum width percentage
    const finalPercentage = Math.max(percentage, minWidthPercentage);

    // Set the --slider-width CSS variable
    meterSlider.style.setProperty("--slider-width", `${finalPercentage}%`);
  }

  updateMeterSliderWidth();

  animateCounter(
    dataStorageQtyUsedEl,
    currentDataStorageQtyUsed,
    dataStorageQtyUsed
  );
  animateCounter(
    dataStorageQtyLeftEl,
    currentDataStorageQtyLeft,
    dataStorageQtyLeft
  );
});
