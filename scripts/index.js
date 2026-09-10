console.log("Teacher homework 23");

// TASK 1
const phoneBook = new Map();
phoneBook.set("Оля", "050-111-22-33");
phoneBook.set("Іван", "067-444-55-66");
phoneBook.set("Марія", "093-777-88-99");

// через функцию + цикл
// function findPhoneFor(name) {
//     for (const [key, value] of phoneBook.entries()) {
//         if (key === name) {
//             return value;
//         }
//     }

//     return "Контакт не знайдено";
// }

// функция без цикла
function findPhone(name) {
    return phoneBook.has(name) ? phoneBook.get(name) : "Контакт не знайдено";
}

function removeContact(name) {
    return phoneBook.delete(name) ? "Контакт видалено" : "Такого контакту нема";
}

function printAll() {
    for (const [key, value] of phoneBook.entries()) {
        console.log(`${key}: ${value}`);
    }
}

console.log(findPhone("Оля"));
console.log(findPhone("Нікіта"));
console.log(findPhone("Іван"));
console.log(findPhone("Марія"));

console.log(removeContact("Оля"));
console.log(removeContact("Нікіта"));

printAll();



// TASK 2
const allowedCodes = new Set();
allowedCodes.add(101);
allowedCodes.add(205);
allowedCodes.add(333);

function checkCode(code) {
    return allowedCodes.has(code) ? "Доступ дозволено" : "Доступ заборонено";
}

console.log(checkCode(205)); // Доступ дозволено
console.log(checkCode(999)); // Доступ заборонено