const userName = "mateusz";
const upperCaseName = userName.charAt(0).toUpperCase() + userName.substring(1);
const userAge = 31;
const likesJavaScript = true;
const userHobby = "fotografia";
const userCity = "Warszawa";
const userAgeFuture = userAge + 10;
const userAdult = userAge >= 18 ? "Jesteś pełnoletni" : "Nie jesteś pełnoletni";
const isWarsawCitizen = userCity === "Warszawa";
let likesJSAndIsAdult = userAge >= 18 && likesJavaScript === true;
let message = `Witaj ${upperCaseName} masz ${userAge} lat. ${userAdult}.`;
likesJavaScript === true && (message += ` Lubisz JavaScript.`);
isWarsawCitizen === true && (message += ` Mieszkasz w Warszawie.`);
message += ` Twoje hobby to ${userHobby}`;
console.log(message);
