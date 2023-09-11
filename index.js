// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  if (data !== {}) {return data;}// Якщо об'єкт не пустий повертаємо дані
  else {new Error("Об'єкт пустий")};// Інакше створюємо помилку,в якості тексту помилки ми використовуємо рядок "Об'єкт пустий".
  // Якщо виникла помилка, повертаємо її повідомлення.
}

console.log("Завдання: 1 ==============================");

console.log(checkData({}));
// Виведе Об'єкт пустий
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  try {return JSON.parse(jsonStr);}// Спроба розпарсити JSON-рядок.
  catch (err)  {// Якщо рядок має невірний формат, виникне помилка, яку ми обробляємо у блоку catch.
  return err.message;}// Повертаємо отриманий об'єкт
  // Якщо виникла помилка, повертаємо її повідомлення.
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  // Спроба отримати вік користувача.
  try {if (age<0)  {// Якщо вік менше 0, виникне помилка, яку ми обробляємо у блоку catch.
  throw new Error("Вік не може бути менше 0!");}// Генеруємо помилку, якщо вік менше 0 з повідомленням Вік не може бути менше 0!.
  return `Вік користувача: ${age}`;} // До помилки дадаємо властивість name зі значенням "AgeError"
 catch (err) {// Викидаємо помилку
  return { error: err.message, name: 'AgeError' };}// Якщо помилки не має повертаємо рядок `Вік користувача: ${age}`
  // Якщо виникла помилка, повертаємо об'єкт з name та message помилки.
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  const book = books.find(book => book.id === id);// Спроба знайти книгу по ID та записати в змінну book.
  if (!book) {throw new TypeError("Книга з ID ${id} не знайдена!");}// Якщо книга не знайдена, генерується TypeError з повідомленням Книга з ID ${id} не знайдена!.
  return `Книга: ${book.title}`;// Повертаємо book
  // Повертаємо текстове представлення помилки
}
console.log("Завдання: 4 ==============================");

try {// Виклик функції з неіснуючим ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    3
  )
);
} catch (error) {console.log(error.message);}// Виведе TypeError: Книга з ID 3 не знайдена!
console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    2
  )
);
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  try {return decodeURIComponent(encodedString);}// Спроба декодувати рядок
  catch (error) {if (error instanceof URIError) { // Повертаємо декодований рядок
    return `Помилка декодування URI: ${error.message}`;}// Якщо виникла помилка, і ії назва дорівнює URIError повертаємо помилку про неправильний URI формат з повідомленням Помилка декодування URI,
    else {return error.toString();}}//  інкше повертаємо текстове представлення помилки
}

console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  let evenNumber;// Створюємо змінну evenNumber без значення
  try {evenNumber = numbers.find((number) => number % 2 === 0); 
    if (evenNumber === undefined) {// Шукаємо перше число, що ділиться на 2 без остачі, та записуємо в нашу змінну.
    // Якщо такого числа немає, кидаємо помилку з повідомлення У масиві немає чисел, що діляться на 2 без остачі!.
 throw new Error("У масиві немає чисел, що діляться на 2 без остачі!");}// Якщо число знайдено повертаємо його
  return evenNumber;} // Виводимо текстове представлення помилки.
 catch (error) {return error.toString();}// Незалежно від результату, виводимо вихідний масив.
finally {console.log(numbers);}
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
console.log(findEvenNumber([1, 3, 5]));

// Виведе
// [ 1, 3, 5 ]
// Error: У масиві немає чисел, що діляться на 2 без остачі!;

console.log(findEvenNumber([1, 4, 5]));

// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  if (!user) {// Перевіряємо, чи існує об'єкт користувача,якщо ні викидуємо помилку з повідомленням "Об'єкт користувача не вказано!".
    const error = new Error("Об'єкт користувача не вказано!");
    error.cause = user; throw error;}
  if (!user.name) {// Перевіряємо, чи існує ім'я користувача,якщо ні викидуємо помилку з повідомленням "Ім'я користувача не вказано!", а як причину вказуємо об'єкт user.
  const error = new Error("Об'єкт користувача не вказано!");
  error.cause = user; throw error;}
  
  if (!user.email) {// Перевіряємо, чи існує email користувача,якщо ні викидуємо помилку з повідомленням "Email користувача не вказано!", а як причину вказуємо об'єкт user.
    const error = new Error("Об'єкт користувача не вказано!");
    error.cause = user; throw error;}
  // Якщо всі перевірки пройдено успішно виводимо повідомлення "Об'єкт користувача відповідає всім вимогам."
  // Виводимо повідомлення про помилку та причину помилки.
}

console.log("Завдання: 7 ==============================");

try {// Виклик функції з неповним об'єктом користувача.
validateUser({ name: "John Doe" });
} catch (error) { console.log(error.message, error.cause);}// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  if (typeof number !== 'number') {throw new TypeError('Аргумент має бути числом!');}// Перевіряємо, чи аргумент є числом, якщо ні викидуємо помилку про невірний тип даних з повідомленням Аргумент має бути числом!".
  if (number < 0) {throw new RangeError('Число не повинно бути від\'ємним!');}// Перевіряємо, чи число не від'ємне, якщо ні викидуємо помилку про тип недопустимий діапазон з повідомленням Число не повинно бути від'ємним!".
  return Math.sqrt(number);// Повертаємо корінь квадратний з вхідного значення
  // Повертаємо повідомлення про помилку.
}

console.log("Завдання: 8 ==============================");
try {
console.log(calculateSquareRoot(9));
} catch (error) {console.error(error.message);}// Виведе 3
try {
console.log(calculateSquareRoot(-9));
} catch (error) {console.error(error.message);}
// Виведе Число не повинно бути від'ємним!
try {
console.log(calculateSquareRoot("abc"));
} catch (error) {console.error(error.message);}// Виведе Аргумент має бути числом!

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  for (let index = 0; index < data.length; index++) {// Для кожного елемента в масиві
    if (typeof data[index] !== 'number') {// Перевіряємо, чи елемент є числом
      throw new TypeError(`Елемент з індексом ${index} має бути числом!`);}}// Якщо елемент не є числом, кидаємо помилку невірного типу даних з повідомленням `Елемент з індексом ${index} має бути числом!`
      return "Дані успішно оброблені";// Повертаємо рядок "Дані успішно оброблені"
  // Виводимо stack trace помилки
  // Повертаємо повідомлення помилки
}

console.log("Завдання: 9 ==============================");

try {// Викликаємо функцію з правильними даними
console.log(processData([1, 2, 3]));
} catch (error) {console.error(error.message);}// Виведе Дані успішно оброблені

try {// Викликаємо функцію з неправильними даними
console.log(processData([1, "two", 3]));
} catch (error) {console.error(error.message);}// Виведе Елемент з індексом 1 має бути числом!

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  try {return eval(expression);// Повертаємо результат розрахунку
} catch (error) {if (error instanceof EvalError) {// Якщо була виявлена помилка повертаємо помилку при виконанні функції eval
  return `EvalError: ${error.message}`;
} else {
  throw error;}}
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4

try {
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
} catch (error) {console.error(`EvalError: ${error.message}`);}