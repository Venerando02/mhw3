const X_IMAGE_MENU = 'immagini/x.png';
const MENU_IMAGE_PNG = 'immagini/menu.png';

function navbar_interaction(event)
{
    console.log('Hai cliccato');
    event.preventDefault();
}

const navbar_item = document.querySelectorAll('#subnavbar #flex-container .navitem');
for(const item of navbar_item)
{
    item.addEventListener('click', navbar_interaction);
}

function ChangeImageRandom(event)
{
    const image = event.currentTarget;
    const index = Math.floor(Math.random()*2);
    if (index === 0)
    {
        const box_chiuso = document.querySelector('#mistery-box');
        const box_aperto = document.querySelector('#win-box');
        const newtext = document.createElement('h1');
        newtext.textContent = 'Sei fortunato! Questa giornata la vincerai!';
        box_chiuso.classList.add('hidden');
        box_aperto.classList.remove('hidden');
        box_aperto.appendChild(newtext);
    }
    else
    {
        const box_chiuso = document.querySelector('#mistery-box');
        const box_aperto = document.querySelector('#lose-box');
        const newtext = document.createElement('h1');
        newtext.textContent = 'Peccato! Le previsioni del mago ti vedono perdente!';
        box_chiuso.classList.add('hidden');
        box_aperto.classList.remove('hidden');
        box_aperto.appendChild(newtext);
    }
    image.removeEventListener('click', ChangeImageRandom);
}

const image = document.querySelector('#mistery-box img');
image.addEventListener('click', ChangeImageRandom);

function ShowMenu(event)
{
    const image_menu = event.currentTarget;
    image_menu.src = X_IMAGE_MENU;
    const menu_aperto = document.querySelector('#menu_item');
    menu_aperto.classList.remove('hidden');
    image_menu.removeEventListener('click', ShowMenu);
    image_menu.addEventListener('click', CloseMenu);
}

function CloseMenu(event)
{
    image_menu_chiuso = event.currentTarget;
    image_menu_chiuso.src = MENU_IMAGE_PNG;
    const menu_open = document.querySelector('#menu_item');
    menu_open.classList.add('hidden');
    image_menu_chiuso.removeEventListener('click', CloseMenu);
    image_menu_chiuso.addEventListener('click', ShowMenu);
}

const image_menu = document.querySelector('#menu-tendina img');
image_menu.addEventListener('click', ShowMenu);

function bottom_interaction(event)
{
    console.log('hai cliccato un bottone del Menu!');
    event.preventDefault();
}

let bottoni_interattivi = document.querySelectorAll('#menu_item a');
for(let bottone of bottoni_interattivi)
{
    bottone.addEventListener('click', bottom_interaction);
}

function ingrandimento(event) 
{
    const block = event.currentTarget;
    block.classList.add('ingrandimento');
    block.removeEventListener('mouseover', ingrandimento);
    block.addEventListener('mouseout', rimpicciolimento);
}

function rimpicciolimento(event)
{
    const block = event.currentTarget;
    block.classList.remove('ingrandimento');
    block.removeEventListener('mouseout', rimpicciolimento);
    block.addEventListener('mouseover', ingrandimento);
}

function stop_propagazione(event){
    console.log('hai cliccato un blocco notizie');
    event.preventDefault();
}

const blocchi_ingrandimento = document.querySelectorAll('.info-s');
for (const blocco of blocchi_ingrandimento)
{
    blocco.addEventListener('mouseover', ingrandimento);
    blocco.addEventListener('click', stop_propagazione);
}

function search_button(event) 
{
    const button = event.currentTarget;
    console.log('Hai Cliccato il tasto di ricerca');
    button.removeEventListener('click', search_button);
}

const button_help = document.querySelector('#help button');
button_help.addEventListener('click', search_button);

function focus(event)
{
    const barra = event.currentTarget;
    console.log('focus lungo la barra di ricerca');
    removeEventListener('click', focus);
}

let ricerca = document.querySelector('#help input');
ricerca.addEventListener('mouseover', focus);

function info_aggiuntive(event)
{
    const input_tag = event.currentTarget;
    const info = input_tag.dataset.info;
    const testo = document.createElement('p');
    testo.textContent = info;
    input_tag.parentNode.appendChild(testo); 
    input_tag.removeEventListener('click', info_aggiuntive);
}

const input_tag = document.querySelector('#help input');
input_tag.addEventListener('click', info_aggiuntive);

