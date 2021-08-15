/* an object is an unordered collection of key-value pairs */

/* like arrays, objects store values, but instead of storing them in numeric "indices", objects store values in string "keys" */

let myArray = ['value1', 'value2'];
//elements are referenced by the index, which must be an integer, where the first element is always at index 0
// in this case there are 2 elements, so the elements are at index 0 and 1

let myObject = {
  'key1': 'value1',
  'key2': 'value2'
};
// elements are referenced by their key
// note that the keys can be essentially ANY string, including string numbers (ex. '1')
// in this example object, the first element is referenced by the key 'key1', and the second is referenced by the key 'key2'

console.log(myArray[0]);
console.log(myObject['key1']);