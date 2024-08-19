class Favorite{
    constructor(){
        this.favoriteList = {};
    }
    
    removeTickets (btn){
        const card = btn.closest('.card');
        const ticketsID = card.dataset.ticketId;
        delete this.favoriteList[ticketsID];
        console.log('d')
        return ticketsID;
    }
}

const favorite = new Favorite();

export default favorite;