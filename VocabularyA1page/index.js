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


let p1 = document.getElementById("p1");
let h8 = document.getElementById("h8");
let Question, Answer;

function losujElementZQuestions() {
    const randomIndex = Math.floor(Math.random() * Questions.length);
    Question = Questions[randomIndex];
    Answer = Answers[randomIndex];
    p1.textContent = Question;

    firstLetter = Answer.charAt(0);
}

let firstLetter;
function CheckAnswers() {
    const userAnswer = document.getElementById("userAnswer").value.trim(); 
    if (userAnswer === '') {
        h8.textContent = "You have to write something";
        h8.style.color = "black";
    } else if (userAnswer.toLowerCase() === Answer.toLowerCase()) {
        h8.textContent = "This was the right answer";
        h8.style.color = "lime";
      
        losujElementZQuestions();
   
        document.getElementById("userAnswer").value = '';
    } else {
        h8.textContent = "This is the wrong answer";
        h8.style.color = "red";
    }
}

function GiveHint() {
        h8.textContent = `The first letter is: ${firstLetter}`;
        h8.style.color = "black";

    
}


losujElementZQuestions();

