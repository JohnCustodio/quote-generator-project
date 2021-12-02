let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl); // Thi variable won't be populated until we havce some data from API
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Cacth error here, handling the problem
  }
}

// On Load
getQuotes();