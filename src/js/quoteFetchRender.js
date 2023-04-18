export async function renderQuote() {
  const quoteObject = await generateQuote();
  const quote = quoteObject.quote;
  const author = quoteObject.author;

  const authorElement = document.getElementById('quoteAuthor');
  const quoteElement = document.getElementById('quote');
  const quoteContainer = document.querySelector('.quote-container');
  authorElement.style.visibility = 'hidden';

  quoteElement.innerText = `"${quote}"`;
  authorElement.innerText = author;

  quoteContainer.addEventListener('mouseover', () => {
    authorElement.style.visibility = `visible`;
  });

  quoteContainer.addEventListener('mouseout', () => {
    authorElement.style.visibility = 'hidden';
  });
}

export async function generateQuote() {
  const response = await fetch(
    'https://api.api-ninjas.com/v1/quotes?category=inspirational',
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'DAyifC5uyAYZOj0RXxnKoJI6tsmMAoPA8QtXwtCT' },
    }
  )
    .then((res) => res.json())
    .then((data) => data[0])
    .catch((err) => {
      console.log(err);
    });
  return response;
}
