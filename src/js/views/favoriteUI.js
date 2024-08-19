import currencyUI from "./currency";

class FavoriteUI {
    constructor(currency) {
        this.container = document.querySelector('.dropdown-content');
        this.getСurrencySymbol = currency.getСurrencySymbol.bind(currency);
    }

    addTicket(btn) {
        btn.classList.remove('favorite-delete');
        btn.classList.add('favorite');
        btn.textContent = 'favorite';
    }

    removeTicket(btn) {
        btn.classList.remove('favorite');
        btn.classList.add('favorite-delete');
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmtyMsg() {
        const template = FavoriteUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    renderTickets(ticket) {
        this.clearContainer();

        const dropList = Object.values(ticket);
        const currency = this.getСurrencySymbol();

        if (!dropList.length) {
            this.showEmtyMsg();
            return;
        }

        let fragment = '';

        dropList.forEach((ticket) => {
            const template = FavoriteUI.ticketTemplate(ticket, currency);
            fragment += template;
        });

        this.container.insertAdjacentHTML('afterbegin', fragment);
    }

    static emptyMsgTemplate() {
        return `<div class="tickets-empty-res-msg">
       У вас нет избранных билетов:(
      </div>`
    }

    static ticketTemplate(ticket, currency) {
        return `
                    <li class = "favorite-item  d-flex align-items-start">
                    <div class="card ticket-card" data-ticket-id = ${ticket.ticketId}>
                      <div class="ticket-airline d-flex align-items-center">
                        <img src="${ticket.airline_logo}" class = "mr-20">
                        <span class="ticket-airline-name">${ticket.airline_name}</span>
                      </div>
                      <div class="ticket-destination d-flex align-items-center">
                        <div class="d-flex align-items-center mr-auto">
                          <span class="ticket-city">${ticket.origin_name}</span>
                          <i class="meduim material-icons"></i>
                        </div>
                        <div class="d-flex align-items-center">
                          <i class="meduim material-icons"></i>
                          <span class="ticket-city">${ticket.destination_name}</span>
                        </div>
                      </div>
                      <div class="ticket-time-price d-flex align-items-center">
                        <span class="ticket-time-departure">${ticket.departure_at}</span>
                        <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
                      </div>
                      <div class="ticket-additional-info">
                        <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                        <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                      </div>
                      <a class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto favorite teal lighten-3">Delete</a>
                    </div>
                        </li>
        `
    }
}

const favoriteUI = new FavoriteUI(currencyUI);

export default favoriteUI;