// Kanji ja Hiragana ja Katakana sanojen 'search engine'
// Tarkoitus, että laitat sanan joko englanniksi tai japaniksi, ja se kääntää sanan APIN avulla.
// Jisho.org:in tapainen sivusto...


// Otetaan muuttuja tekstilaatikosta, joka otetaan ja sitten laitetaan seuraavaksi tähän jos... 
// Merkki on kanji, tai hiragana tai katana..
//Katsotaan mitä kanji merkit / katakana / hiragana tarkoittaa
let i = document.getElementsByClassName("TextArea");
async function lookKanji() {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${i.toLowerCase()}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '5055871238mshd37c6a70d5be848p127251jsnb26bf4b67492',
		    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};
    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
}   catch (error) {
	    console.error(error);
}
}
// Etsitään mahdollisia Kanjia englannikielisistä sanoista... Toimii näemmä vain pienillä kirjaimilla.
async function searchKanji() {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=${i.toLowerCase()}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5055871238mshd37c6a70d5be848p127251jsnb26bf4b67492',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function searchResult(){
    const answer = ''
    

}