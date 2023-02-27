const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

const hourDigital = document.querySelector(".hour")
const minDigital = document.querySelector(".min")
const secDigital = document.querySelector(".sec")

function clock() {
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // const secondDegrees = ((sec / 60) * 360)
    const secondDegrees = ((sec / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    // const minDegrees = ((min / 60) * 360)
    const minDegrees = ((min / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`

    // const hourDegrees = ((min / 12) * 360)
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    // const hourDegrees = ((hour % 12) / 12) * 360 + ((min / 60) * 30) + 90;
    // const minuteDegrees = (min / 60) * 360 + ((sec / 60) * 6) + 90;
    // const secondDegrees = (sec / 60) * 360 + 90;
    // hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    // secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    if (sec < 10) {
        secDigital.innerHTML = `0${sec}`;
    } else {
        secDigital.innerHTML = sec;
    } if (min < 10) {
        minDigital.innerHTML = `0${min}`;
    } else {
        minDigital.innerHTML = min;
    } if (hour < 10) {
        hourDigital.innerHTML = `0${hour}`;
    } else {
        hourDigital.innerHTML = hour;
    }
    console.log(sec);
    // console.log(secondDegrees);
    // console.log(hour);
    // console.log(min);
    // console.log(now);
}
// clock();
setInterval(clock, 1000)
