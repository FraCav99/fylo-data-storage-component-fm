import './style.scss'

const meter = document.querySelector("meter") 
const meterSlider = document.querySelector(".meter-slider") 

function updateMeterSliderWidth() {
   const percentage = (meter.value / meter.max) * 100
    // Calculate the minimum percentage width based on the parent element's width
    const wrapperWidth = meterSlider.parentElement.clientWidth;
    const minWidthPercentage = (20 / wrapperWidth) * 100;

    // Ensure the percentage is at least the minimum width percentage
    const finalPercentage = Math.max(percentage, minWidthPercentage);

    // Set the --slider-width CSS variable
    meterSlider.style.setProperty('--slider-width', `${finalPercentage}%`);
}

updateMeterSliderWidth()