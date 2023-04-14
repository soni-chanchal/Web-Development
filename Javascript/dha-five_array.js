// Array: It is collection of elements. Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

// declare and initialize array
let array = [10, true, 'string', { data: 'value' }]

// print elements of array
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}


// 1. join(): The join() method also joins all array elements into a string.
const stringArray = ["A", "B", "C", "D"];
stringArray.join('-')

// 2. pop(): The pop() method removes the last element from an array:
array.pop()

// 3. push(): The push() method adds a new element to an array (at the end):
array.push('Chanchal')
array.pop()

// 4. shift(): The shift() method removes the first array element and "shifts" all other elements to a lower index.
array.shift()

// 5. unshift(): The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
array.unshift()

// 6. length: The length property provides an easy way to append a new element to an array.
array.length

// 7. delete:  Array elements can be deleted using the JavaScript operator delete.
delete array[0];

// 8. concat(): The concat() method creates a new array by merging (concatenating) existing arrays.
let arr1 = [1, 2, 3]
let arr2 = [4, 5]
arr1.concat(arr2)

// 9. sortt(): The sort() method sorts the items of an array in a specific order (ascending or descending).
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
city.sort(); // sorts in ascending order

// 10. lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
let priceList = [10, 8, 2, 31, 10, 31, 65];
priceList.lastIndexOf(31);

// 11. indexOf(): The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
let languages = ["Java", "JavaScript", "Python", "JavaScript"];
languages.indexOf("JavaScript");

// 12. of(): The of() method creates a new Array instance from the given arguments.
let alphabets = Array.of("A", "B", "C");
console.log(alphabets);

// 13. find(): The find() method returns the value of the first array element that satisfies the provided test function.
let numbers = [1, 3, 4, 9, 8];
numbers.find(x => x == 3);

// 14. The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.
numbers.findIndex(x => x == 3);

// 15. includes(): The includes() method checks if an array contains a specified element or not.
languages.includes("Java");

// 16. isArray(): The isArray() method checks whether the passed argument is an array or not.
console.log(Array.isArray(numbers));

// 17. map(): The map() method creates a new array with the results of calling a function for every array element.
let square_numbers = numbers.map(x => x * x);
console.log(square_numbers);

// 18.The forEach() method executes a provided function for each array element.
numbers.forEach(x => {
    console.log(x);
});

// 19. The some() method tests whether any of the array elements pass the given test function.
// checks whether the numbers array contain at least one even number
console.log(numbers.some(x => x % 2 == 0));

// 20. The every() method checks if all the array elements pass the given test function.
numbers.every(x => x > 12);

