function findAngle(time) {
  const [hour, minutes] = time.split(":");

  let hourAngle = hour * 30 + minutes * 0.5;

  let minutesAngle = minutes * 6.0;

  let angle = Math.abs(hourAngle - minutesAngle);

  if (angle > 180) return 360 - angle;
  return angle;
}

console.log(findAngle("12:00"));

/*

Test Cases

9:15 = 172
12:00 = 0

*/
