const Tickets = [];

// function createTicket(id, text, priority, state) {
//     Tickets.push({
//         id: id,
//         text: text,
//         priority: priority,
//         state: state
//     })
// }
let flag = 0;

function createTicket() {
    flag++;
    let NAME = document.querySelector('#title');
    let PRIO = document.querySelector('.RadioPiorytet').value;
    let STATUS = document.querySelector('.RadioStatus').value;
    Tickets.push({
        id: flag,
        text: NAME,
        priority: PRIO,
        state: STATUS
    })
}




function updateTicket() {

}
