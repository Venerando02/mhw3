function OnJson(json) 
{
    console.log(json);
    const body = document.querySelector('#view');
    body.innerHTML = '';
    if (json.players && json.players.length > 0)
    {
        const giocatore = json.players[0];
        const nome = giocatore.firstName;
        const cognome = giocatore.lastName;
        const nazionalità = giocatore.nationImage;
        const club = giocatore.club;
        const immagine_p = giocatore.playerImage;

        const blocco_completo = document.createElement('div');
        blocco_completo.classList.add('stile_blocco');

        const blocco_giocatore = document.createElement('div');
        blocco_giocatore.classList.add('div');
    
        const scheda_tecnica = document.createElement('div');
        scheda_tecnica.classList.add('stile_scheda_tecnica');

        const im_p = document.createElement('img');
        im_p.src = immagine_p;
        blocco_giocatore.appendChild(im_p);
        blocco_giocatore.classList.add('stile_immagine');

        const nome_completo = document.createElement('h2');
        nome_completo.textContent = 'NOME COMPLETO:\n' + nome + ' ' + cognome;
        const club_a = document.createElement('h2');
        club_a.textContent = 'CLUB ATTUALE:\n' + club;
        scheda_tecnica.appendChild(nome_completo);
        scheda_tecnica.appendChild(club_a);

        blocco_completo.appendChild(scheda_tecnica);
        blocco_completo.appendChild(blocco_giocatore);

        body.appendChild(blocco_completo);
    } 
    else
    {
        const message = document.createElement('span');
        message.textContent = 'Il giocatore che stai cercando non esiste';
        body.appendChild(message);
    }
}


function OnError(error){
    console.log('Error: ' + error);
}

function OnResponse(response){
    return response.json();
}

function Ricerca(event){
    event.preventDefault();
    const giocatore = document.querySelector('#player_info');
    const player_name = encodeURIComponent(giocatore.value);
    fetch('https://transfermarket.p.rapidapi.com/search?query=' + player_name + '&domain=de', 
        {
            method: 'GET',
            headers: 
            {
                'X-RapidAPI-Key': 'fc324a822dmshbac1217b47220b3p1632ddjsneccc97c75847',
		        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
            }
        }
    ).then(OnResponse, OnError).then(OnJson);
}

const form = document.querySelector('form');
form.addEventListener('submit', Ricerca);