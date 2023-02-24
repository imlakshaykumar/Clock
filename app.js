const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

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
    // console.log(sec);
    // console.log(hour);
    // console.log(min);
    // console.log(now);
}
// clock();
setInterval(clock, 1000)
