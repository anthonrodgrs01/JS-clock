const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const digitalTime = document.querySelector('.digitalTime');

function setDate(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes(); 
    const seconds = now.getSeconds();
    const hourDegree = (hour * 30) + 90;
    const minuteDegree = (minute * 6) + 90;
    const secondDegree = (seconds * 6)+90; 
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    


}

setInterval(setDate,1000);