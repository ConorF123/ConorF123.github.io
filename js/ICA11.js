const newQuoteBtn = document.querySelector("#js-new-quote");

newQuoteBtn.addEventListener("click", getQuote);

document.addEventListener("DOMContentLoaded", () => { // So that a quote is shown when the page is loaded
    getQuote();
  });

function getQuote() {
    console.log("Button clicked!");

    const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

    fetch(endpoint)
        .then(response => {
            if (response.ok) {
            return response.json();
        }

        console.log("Unable to find quote.");
    })
    .then(data => {
        displayQuote(data.question + "\n" + data.answer);
    })
    .catch(error => {
        alert("Failed to fetch quote. Please try again.");
    });
}

function displayQuote(quote) {
    const quoteTextEl = document.querySelector("#js-quote-text");
    quoteTextEl.textContent = quote;
}