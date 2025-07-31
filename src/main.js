import './style.scss'

const meterWrapper = document.getElementById('meter-wrapper')

document.addEventListener('DOMContentLoaded', function () {
   const meter = document.querySelector('meter')
   const leftoverPercentage = ((meter.max - meter.value) / meter.max) * 100; 
   meterWrapper.style.setProperty('--white-circle-position', `${leftoverPercentage}%`)
})