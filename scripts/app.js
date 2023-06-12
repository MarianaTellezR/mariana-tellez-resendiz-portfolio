var headings = [
  "Computer Systems Engineer",
  "Software Developer",
  "Front End Developer",
];
var i = 0;
var intervalId = setInterval(function () {
  document.getElementById("career-heading").innerHTML = headings[i];
  if (i == headings.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 3000);
