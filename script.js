function OnJson(json) {
    const section_h = document.querySelector('#notizie');
    section_h.innerHTML = '';
    let numero_risultati = json.totalArticles; 
    if (numero_risultati > 4) 
    {
        numero_risultati = 4;
    }
    for (let i = 0; i < numero_risultati; i++) 
    {
        const notizia = json.articles[i];

        const title = notizia.title;
        const desc = notizia.description;
        const url = notizia.url;
        const img = notizia.image;

        const blocco_notizia_completa = document.createElement('div');
        blocco_notizia_completa.classList.add('stile_div_notizia');

        const block_img = document.createElement('div');
        block_img.classList.add('div');
        const im = document.createElement('img');
        im.src = img;
        im.classList.add('stile_immagine');
        block_img.appendChild(im);
        
        const block_a = document.createElement('div');
        block_a.classList.add('stile_div_scrittura');

        const titolo = document.createElement('h1');
        titolo.textContent = title;
        titolo.classList.add('stile_titolo');
        const descrizione = document.createElement('span');
        descrizione.textContent = desc;
        const link = document.createElement('a');
        link.classList.add('stile_link');
        link.href = url;
        link.textContent = 'Leggi di più...';

        block_a.appendChild(titolo);
        block_a.appendChild(descrizione);
        block_a.appendChild(link);

        blocco_notizia_completa.appendChild(block_img);
        blocco_notizia_completa.appendChild(block_a);

        section_h.appendChild(blocco_notizia_completa);
    }
}

function onError(error)
{
  return console.log('Error: ' + error);
}

function OnResponse(response) {
    console.log('JSON RICEVUTO.');
    return response.json();
}

function search(event) {
    event.preventDefault();
    const n_input = document.querySelector('#notizia');
    const n_value = encodeURIComponent(n_input.value);
    console.log('Eseguo ricerca: ' + n_value);
    rest_url = 'https://gnews.io/api/v4/search?q=' + n_value + '&token=' + API_KEY;
    console.log('URL: ' + rest_url);
    fetch(rest_url).then(OnResponse, onError).then(OnJson);
    console.log(rest_url);
}

const API_KEY = '705faec60d22bdd88aced263448b7380'
const form = document.querySelector('form');
form.addEventListener('submit', search);