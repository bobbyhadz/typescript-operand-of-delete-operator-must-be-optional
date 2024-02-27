export {};

// EXAMPLE 1 - Set the property to optional on the type

// 👇️ const obj: {name?: string | undefined;}
const obj: { name?: string } = { name: 'Bobby Hadz' };

// ✅ works
delete obj['name'];

console.log(obj); // 👉️ {}

// ---------------------------------------------------

// // EXAMPLE 2 - Using an interface instead of a type

// interface Person {
//   name?: string;
// }

// const obj: Person = { name: 'Bobby Hadz' };

// delete obj['name'];

// console.log(obj); // 👉️ {}

// ---------------------------------------------------

// // EXAMPLE 3 - Making only some of the properties optional

// interface Person {
//   name: string;
//   age: number;
//   country: string;
// }

// const obj: Partial<Pick<Person, 'name' | 'country'>> &
//   Omit<Person, 'name' | 'country'> = {
//   name: 'Bobby Hadz',
//   age: 30,
//   country: 'Chile',
// };

// delete obj['name'];

// delete obj['country'];

// console.log(obj); // 👉️ {age: 30}

// ---------------------------------------------------

// // EXAMPLE 4 - Using types instead of interfaces

// type Person = {
//   name?: string;
// };

// const obj: Person = {
//   name: 'Bobby Hadz',
// };

// delete obj['name'];

// console.log(obj); // 👉️ {}
