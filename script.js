function updateCard() {
    const cardNumber = document.getElementById("cardNumber").value;
    const cardName = document.getElementById("cardName").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    document.getElementById("displayCardNumber").textContent = cardNumber || "XXXX XXXX XXXX XXXX";
    document.getElementById("displayCardName").textContent = cardName || "AD SOYAD";
    document.getElementById("displayExpiryDate").textContent = expiryDate || "AA/YY";
    document.getElementById("displayCvv").textContent = cvv || "XXX";
}

function formatCardNumber() {
    const input = document.getElementById("cardNumber");
    let value = input.value.replace(/\s/g, '');
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    input.value = formattedValue;
}

function flipCard(flip) {
    const card = document.getElementById("creditCard");
    if (flip) {
        card.classList.add("flip");
    } else {
        card.classList.remove("flip");
    }
}

function formatExpiryDate() {
    const input = document.getElementById('expiryDate');
    let value = input.value.replace(/\D/g, '');

    
    if (value.length >= 1 && value[0] !== '1' && value[0] !== '0') {
        value = '0' + value;
    }

    
    let month = value.slice(0, 2);
    if (month > 12) {
        month = '12'; 
    }

    
    value = month + value.slice(2, 4).slice(0, 2); 
    
    
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }

    input.value = value; 

    updateCard(value);
}