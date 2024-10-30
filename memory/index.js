const Questions = [
    "dom", "kot", "chleb", "woda", "drzwi", "telefon", "książka", "samochód", "kawa", "okno",
    "krzesło", "lampa", "stół", "kwiat", "buty", "torba", "biurko", "telewizor", "miasto", "praca",
    "szkoła", "przyjaciel", "matka", "tata", "brat", "siostra", "córka", "syn", "pies", "ulica",
    "poczta", "kino", "park", "basen", "morze", "góry", "rzeka", "las", "wiosna", "lato", "jesień",
    "zima", "pieniądze", "godzina", "minuta", "sekunda", "niedziela", "poniedziałek", "wtorek",
    "środa", "czwartek", "piątek", "sobota", "rower", "samolot", "pociąg", "autobus", "tak", "nie",
    "dziecko", "kobieta", "mężczyzna", "nauczyciel", "uczeń", "pokój", "łazienka", "sypialnia", "kuchnia",
    "kawiarnia", "restauracja", "sklep", "apteka", "szpital", "kino", "muzyka", "film", "sport", "grzyb",
    "jajko", "mleko", "ser", "mięso", "ryba", "warzywa", "owoce", "miód", "cukier", "sol", "pieprz",
    "czekolada", "ciasto", "zupa", "płatki", "kanapka", "pizza", "hamburger", "hot-dog", "woda gazowana",
    "woda niegazowana", "herbata", "sok", "wino", "piwo", "mleko czekoladowe", "kawa latte", "kawa espresso",
    "długopis", "ołówek", "zeszyt", "kartka", "komputer", "telefon komórkowy", "telewizor", "radio", "zegarek",
    "but", "szalik", "rękawiczki", "czapka", "płaszcz", "sweter", "spodnie", "spódnica", "koszula", "bluza"
];

const Answers = [
    "house", "cat", "bread", "water", "door", "phone", "book", "car", "coffee", "window",
    "chair", "lamp", "table", "flower", "shoes", "bag", "desk", "TV", "city", "work",
    "school", "friend", "mother", "father", "brother", "sister", "daughter", "son", "dog",
    "street", "post office", "cinema", "park", "swimming pool", "sea", "mountains", "river",
    "forest", "spring", "summer", "autumn", "winter", "money", "hour", "minute", "second",
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    "bicycle", "airplane", "train", "bus", "yes", "no", "child", "woman", "man", "teacher",
    "student", "room", "bathroom", "bedroom", "kitchen", "café", "restaurant", "shop", "pharmacy",
    "hospital", "cinema", "music", "film", "sport", "mushroom", "egg", "milk", "cheese", "meat",
    "fish", "vegetables", "fruit", "honey", "sugar", "salt", "pepper", "chocolate", "cake",
    "soup", "cereal", "sandwich", "pizza", "hamburger", "hot dog", "sparkling water", "still water",
    "tea", "juice", "wine", "beer", "chocolate milk", "latte", "espresso", "pen", "pencil",
    "notebook", "paper", "computer", "mobile phone", "radio", "watch", "boot", "scarf",
    "gloves", "hat", "coat", "sweater", "pants", "skirt", "shirt", "sweatshirt"
];

function createMemoryGame() {
    const memoryGameContainer = document.querySelector('.memory-game');
    memoryGameContainer.innerHTML = '';

    let selectedPairs = [];
    while (selectedPairs.length < 8) {
        let index = Math.floor(Math.random() * Questions.length);
        if (!selectedPairs.includes(index)) {
            selectedPairs.push(index);
        }
    }

    let gamePairs = selectedPairs.concat(selectedPairs);
    gamePairs.sort(() => 0.5 - Math.random());

    gamePairs.forEach(index => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.question = Questions[index];
        card.dataset.answer = Answers[index];

        card.innerHTML = `
            <div class="front-face">${Questions[index]}</div>
            <div class="back-face"></div>
        `;

        memoryGameContainer.appendChild(card);
    });

    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', flipCard);
    });
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.answer === secondCard.dataset.answer;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Initialize the game
createMemoryGame();
