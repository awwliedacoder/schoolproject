function searchDictionary() {
    const apiKey = '5055871238mshd37c6a70d5be848p127251jsnb26bf4b67492'; 
    const searchInput = document.getElementById('searchInput').value;

    // Katsotaan ettei inputti ole tyhjä.
    if (!searchInput) {
        alert('Please enter a kanji or word to search.');
        return;
    }
    // Tehdään api requesti
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=${searchInput.toLowerCase()}`;
    const options = {
        method: 'GET',
        
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        // Handle the API response
        displayResult(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data. Please try again.');
    });
}

//Funktio joka näyttää sitten tämän vastauksen...
      function displayResult(data) {
            const resultContainer = document.getElementById('result');
            
            // Poistetaan vanhat vastaukset
            resultContainer.innerHTML = '';

            if (data && data.length > 0) {
                const meaning = document.getElementById('searchInput').value;
                const meaning2 = meaning.charAt(0).toUpperCase() + meaning.slice(1);

                // Vast
                data.forEach(kanjiInfo => {
                    const resultHTML = `
                        <h2>${kanjiInfo.kanji.character}</h2>
                        <p>Meaning: ${meaning2}</p>
                        <p>Stroke Count: ${kanjiInfo.kanji.stroke}</p>
                        <p>Radical: ${kanjiInfo.radical.character}</p>
                        <p>Radical Stroke: ${kanjiInfo.radical.stroke}</p>
                        <p>Radical order: ${kanjiInfo.radical.order}</p>

                    `;
                    resultContainer.innerHTML += resultHTML;
                });
            } else {
                // Jos ei löydy vastauksia
                resultContainer.innerHTML = '<p>No results found.</p>';
            }
        }