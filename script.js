
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
    let value = input.value.replace(/\s/g, ''); // Boşlukları kaldır
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim(); // Her 4 karakterde bir boşluk ekle
    input.value = formattedValue; // Formatlanmış değeri input'a ata
}

function flipCard(flip) {
    const card = document.getElementById("creditCard");
    if (flip) {
        card.classList.add("flip");
    } else {
        card.classList.remove("flip");
    }
}