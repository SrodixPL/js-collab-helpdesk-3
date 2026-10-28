const Tickets = [];
let flag = 0;

function createTicket() {
    flag++;

    let NAME = document.querySelector('#title').value;
    let PRIO = document.querySelector('.RadioPiorytet:checked').value;
    let STATUS = document.querySelector('.RadioStatus:checked').value;

    Tickets.push({
        id: flag,
        text: NAME,
        priority: PRIO,
        state: STATUS
    });

    displayTickets();
}

function displayTickets() {
    let display = document.querySelector('#ticketsList');

    display.innerHTML = "";

    Tickets.forEach(ticket => {
        display.innerHTML += `
            <li>
                <ol>
                    <li>ID: ${ticket.id}</li>
                    <li>Title: ${ticket.text}</li>
                    <li>Priority: ${ticket.priority}</li>
                    <li>Status: ${ticket.state}</li>
                </ol>
            </li>
        `;
    });
}