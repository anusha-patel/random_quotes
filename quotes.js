var category = 'happiness';

document.getElementById('fetchQuote').addEventListener('click', () => {
  fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'KUA4/HHWtYKz5rRG/s2vDA==WWgHQbmekd6uDmkB',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Check if the response status is OK (200)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Parse the response as JSON
  return response.json();
 
})
.then(result => {
    // console.log(result);
    updateHTMLWithData(result);
   
  })
.catch(error => {
  console.error('Fetch error:', error);
});
  
});




function updateHTMLWithData(apiData) {
  console.log(apiData);
  const quote = document.getElementById('quote');
  const author= document.getElementById('author');
  quote.innerHTML = ` ${apiData[0].quote}`;
  author.innerHTML = ` ${apiData[0].author}`;
}








