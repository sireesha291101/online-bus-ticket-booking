function bookTicket(){

    console.log("book ticket button clicked")
    
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let destinationPrice = Number(document.getElementById("destination").value);
    let tickets = Number(document.getElementById("tickets").value);

    let result = document.getElementById("result");

    // Validation
    if(name === "" || age === 0 || destinationPrice === 0 || tickets === 0){
        result.innerHTML = "Please fill all details";
        return;
    }

    // Ticket Limit Validation
    if(tickets < 1 || tickets > 6){
        result.innerHTML = "You can book minimum 1 and maximum 6 tickets";
        return;
    }

    let total = destinationPrice * tickets;

    // Discount Logic
    if(age < 5){
        total = 0;
    }
    else if(age >= 60){
        total = total - (total * 0.30);
    }

    // Seat Availability
    let availableSeats = 40;

    if(tickets > availableSeats){
        result.innerHTML = "Seats not available";
        return;
    }

    availableSeats = availableSeats - tickets;

    // Booking Summary
    result.innerHTML = `
        <h3>Booking Successful</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
        <p><strong>Total Amount:</strong> ₹${total}</p>
        <p><strong>Available Seats:</strong> ${availableSeats}</p>
    `;
}
