import '../css/style.css';
import './plugins'
import locations from './store/locations';
import formUI from './views/form';
import currencyUI from './views/currency';
import ticketUI from './views/tickets';
import favorite from './store/favorite';
import favoriteUI from './views/favoriteUI';

document.addEventListener('DOMContentLoaded', () =>{
    initApp();
    const form = formUI.form;

    form.addEventListener('submit', e =>{
        e.preventDefault();

        onFormSubmit();

    });

    document.body.addEventListener('click', e =>{
        if(e.target.classList.contains('favorite-delete')){
            favoriteUI.addTicket(e.target);
            addFavorite(e.target);
            favoriteUI.renderTickets(favorite.favoriteList);
            console.log(favorite.favoriteList);
            return;
        }

        if(e.target.classList.contains('favorite')){
           let cardId = favorite.removeTickets(e.target);
            favoriteUI.renderTickets(favorite.favoriteList);
            let btn = document.querySelector(`[data-ticket-id = '${cardId}'] .favorite`);
            console.log(btn);
            favoriteUI.removeTicket(btn);

            return;
        }
    })

    async function initApp(){
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiessList);
    }

    async function onFormSubmit(){
        const origin = locations.getCityCodeByKey( formUI.originValue);
        const destination = locations.getCityCodeByKey( formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        await locations.fetchTickets({origin, destination,depart_date,return_date, currency});
       
        ticketUI.renderTickets(locations.lastSerch);
    }

    function addFavorite(target){
        let card = target.closest('.card');
        const ticketId = card.dataset.ticketId;
        const ticket = locations.lastSerch.find(ticket=> ticket.ticketId === ticketId);
        Object.assign(favorite.favoriteList,{
            [ticketId]:ticket,
        });
       
    }

});