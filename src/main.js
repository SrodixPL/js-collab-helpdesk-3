const Tickets = [];
const Priorities = ["Niski", "Średni", "Wysoki"]
const States = ["Nowy", "W trakcie rozpatrywania", "W trakcie testów", "Ukończone"]

function createTicket(id, text, priority, state) {
    Tickets.push({
        id: id,
        text: text,
        priority: priority,
        state: state
    })
}

function updateTicket() {

}

// text: string
// priority: number or array of numbers
// state: array of strings
// order: 1 = Low-High, 2 = High-Low
// returns array
function sortTickets(text, priority, state, order) {

    if (typeof text !== "string") {
        console.error("'text' was not a string");
        return;
    }

    if (typeof priority !== "number" && !Array.isArray(priority)) {
        console.error("'priority' must be a number or array");
        return;
    }

    if (typeof priority === "number") {
        priority = [priority];
    }

    if (!priority.every(p => Number.isInteger(p) && p >= 0 && p < Priorities.length)) {
        console.error("'priority' contains invalid values");
        return;
    }

    if (!Array.isArray(state)) {
        console.error("'state' was not an array");
        return;
    }

    if (!state.every(s => States.includes(s))) {
        console.error("'state' contains invalid values");
        return;
    }

    if (order !== 1 && order !== 2) {
        console.error("'order' must be 1 or 2");
        return;
    }

    return Tickets
        .filter(ticket =>
            state.length === 0 || state.includes(ticket.state)
        )

        .filter(ticket =>
            priority.length === 0 || priority.includes(ticket.priority)
        )

        .sort((a, b) =>
            order === 1
                ? a.priority - b.priority
                : b.priority - a.priority
        )

        .filter(ticket =>
            ticket.text.toLowerCase().includes(text.toLowerCase())
        );
}