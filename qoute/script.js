const quotes = {
  "Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Isaac Newton": "If I have seen further it is by standing on the shoulders of Giants.",
  "Yoda": "Do or do not. There is no try.",
  "Confucius": "It does not matter how slowly you go as long as you do not stop."
};

function getQuote() {
  const author = document.getElementById("author").value.trim();
  const quote = quotes[author];
  const quoteDisplay = document.getElementById("quote");

  if (quote) {
      quoteDisplay.innerText = `"${quote}"`;
  } else {
      quoteDisplay.innerText = "Quote not found for this author.";
  }
}
