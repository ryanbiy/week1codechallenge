function carSpeed(speed){
    let say;
if (speed <= 70) {
   say = "Ok";
} else if (speed > 70 && speed <= 75) {
    demeritPoints = "1";
    say = "Ok";
} else if (speed > 75 && speed <= 80) {
    demeritPoints = "2";
    say = "Ok";
} else if (speed > 80 && speed <= 85) {
    demeritPoints = "3";
    say = "Ok";
} else if (speed > 85 && speed <= 90) {
    demeritPoints = "4";
    say = "Ok";
} else if (speed > 90 && speed <= 95) {
    demeritPoints = "5";
    say = "Ok";
} else if (speed > 95 && speed <= 100) {
    demeritPoints = "6";
    say = "Ok";
} else if (speed > 100 && speed <= 105) {
    demeritPoints = "7";
    say = "Ok";
} else if (speed > 105 && speed <= 110) {
    demeritPoints = "8";
    say = "Ok";
} else if (speed > 110 && speed <= 115) {
    demeritPoints = "9";
    say = "Ok";
} else if (speed > 115 && speed <= 120) {
    demeritPoints = "10";
    say = "Ok";
} else if (speed > 120 && speed <= 125) {
    demeritPoints = "11";
    say = "Ok";
} else {
    demeritPoints = "12";
    say ="License suspended";
}
console.log(say)
console.log(demeritPoints)
}