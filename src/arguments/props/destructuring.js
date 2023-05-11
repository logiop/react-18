// In JavaScript, la destructuring è una sintassi che consente di estrarre i valori dalle strutture dati come oggetti e array, e di assegnarli a variabili separate.

// Ad esempio, se si ha un oggetto person con le proprietà name e age, si può estrarre il valore di queste proprietà in variabili separate utilizzando la sintassi di destructuring come segue:

const person = { name: 'John', age: 30 };
const { name, age } = person;

console.log(name); // 'John'
console.log(age); // 30


const myArray = [1, 2, 3];
const [first, second, third] = myArray;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3


// In questo esempio, la sintassi [first, second, third] = myArray assegna il primo elemento dell'array myArray alla variabile first, il secondo elemento alla variabile second e il terzo elemento alla variabile third.

