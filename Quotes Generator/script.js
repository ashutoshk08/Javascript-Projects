const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    text: "There is only one happiness in this life, to love and be loved.",
    author: "George Sand",
  },
  {
    text: "Be happy for this moment. This moment is your life.",
    author: "Omar Khayyam",
  },
  {
    text: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Be kind whenever possible. It is always possible.",
    author: "The Dalai Lama",
  },
  {
    text: "Adopt the pace of nature: Her secret is patience.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",
    author: "Helen Keller",
  },
  {
    text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Action may not always bring happiness, but there is no happiness without action.",
    author: "William James",
  },
];

// Selecting the parent
const quotesContainer = document.querySelector(".quotes-container");

// Creating a <p> for Quote
const pForQuote = document.createElement("p");
pForQuote.setAttribute("id", "quote");

// Creating a <p> for Author
const pForAuthor = document.createElement("p");
pForAuthor.setAttribute("id", "author");

// Appending both the elements into parent
quotesContainer.append(pForQuote, pForAuthor);

let index = 0;
let n = quotes.length;
function displayQuotes() {
  pForQuote.innerHTML = quotes[index].text;
  pForAuthor.innerHTML = `-${quotes[index].author}`;
  index = (index + 1) % n;
}
displayQuotes();
setInterval(displayQuotes, 5000);

const mainContainer = document.querySelector("main");
const div = document.createElement("div");
div.setAttribute("class", "rgbColorGenerator");

mainContainer.appendChild(div);

const rgbColorContainer = document.querySelector(".rgbColorGenerator");
const span = document.createElement("span");
span.setAttribute("id", "rgbDisplay");

const button = document.createElement("button");
button.setAttribute("id", "change");
button.innerHTML = "Change";

rgbColorContainer.append(span, button);

const changeBtn = document.getElementById("change");
changeBtn.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const rgbDisplay = document.getElementById("rgbDisplay");
  rgbDisplay.style.backgroundColor = `rgb(${red},${blue},${green})`;
});
