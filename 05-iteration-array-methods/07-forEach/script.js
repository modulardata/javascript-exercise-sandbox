const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
/* In JavaScript, `__proto__` is a property that allows you to access an object's
prototype. When you access `socials.__proto__`, you are actually accessing the
prototype of the `socials` array. The prototype is like a blueprint that defines
properties and methods that are available to all instances of a particular type
of object. */
// console.log(socials.__proto__);

// Long form
// socials.forEach(function (item) {
//   console.log(item);
// });

// // Short form
// socials.forEach((item) => console.log(item));

// // We can also pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Using a named function
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// // Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.name, item.url));
