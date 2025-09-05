document.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  //   circle.setAttribute("class", "circle");
  //   circle.className = 'circle';
  circle.classList.add("circle");

  const colors = [
    "rgb(255, 204, 0)",
    "rgb(0, 204, 153)",
    "rgb(255, 85, 0)",
    "rgb(204, 0, 153)",
    "rgb(0, 153, 204)",
    "rgb(153, 204, 0)",
    "rgb(255, 51, 204)",
    "rgb(0, 153, 0)",
    "rgb(102, 0, 204)",
    "rgb(204, 51, 0)",
  ];

  circle.style.backgroundColor = colors[Math.floor(Math.random() * 10)];

  const messages = [
    "Hello",
    "Hi there",
    "How are you?",
    "Good morning",
    "Good evening",
    "What's up?",
    "Nice to see you",
    "Hope you're well",
    "How’s it going?",
    "Long time no see",
  ];
  circle.textContent = messages[Math.floor(Math.random() * 10)];

  const x = event.clientX;
  const y = event.clientY;
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  //   const body = document.querySelector("body");
  //   body.append(circle);
  document.body.appendChild(circle);

  // remove after 5 secs
  setTimeout(() => {
    circle.remove();
  }, 5000);
});
