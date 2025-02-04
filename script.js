const messages = [
    "Et zene...",
    "Jesi sigurna?",
    "Pls?",
    "... :'(",
    "Barem razmisli???",
    "Ja idalje cekam odgovor...",
    "Sad me vec radi na domestic violence",
    "plsplsplspls reci da",
    "ma boli me briga u stvari",
    "NE NE BOLI ME BRIGA MOLIM TE RECI DA PLSPLSPLSPLS❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "PRISTALA_JE.html";
}