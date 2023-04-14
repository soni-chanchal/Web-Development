// String: String is a primitive data type that is used to work with texts.
const name = 'Chanchal';
console.log(name);

// 1.length: The length property returns the number of characters in a string.
name.length

// 2. indexOf(): The string indexOf() method returns the index of the first occurence of the substring in a string.
const message = "I am Chanchal.";
message.indexOf("am");

// 3. lastIndexOf(): The lastIndexOf() method returns the last index of occurence of a given substring in the string.
var str = "Programming";
str.lastIndexOf('g')

// 4. startsWith(): The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.
message.startsWith("I");


// 5. The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.
message.endsWith('Chanchal');

// 6. toUpperCase(): The toUpperCase() method returns the string converted to uppercase.
message.toUpperCase();

// 7. toLowerCase(): The toLowerCase() method returns the string converted to lowercase.
message.toLowerCase();

// 8. includes(): The includes() method checks if one string can be found inside another string.
message.includes('am');

// 9. repeat(): The repeat() method creates a new string by repeating the given string a specified number of times and returns it.
const holiday = "Happy holiday!";
holiday.repeat(3);

// 10. charAt(): The charAt() method returns the character at the specified index in a string.
message.charAt(1);

// 11. charCodeAt(): The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
message.charCodeAt(1);

// 12. fromCharCode(): The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
String.fromCharCode(72, 69, 76, 76, 79);

// 13. substring(): The substring() method returns a specified part of the string between start and end indexes.
message.substring(0, 5)

// 14. padStart(): The padStart() method pads the current string with another string to the start.
let string1 = "CODE";
string1.padStart(10, "*");

// 15. padEnd(): The padEnd() method pads the current string with another string to the end.
string1.padEnd(10, "*");

// 16. fromCodePoint(): The fromCodePoint() method returns a string created by using the given sequence of unicode code points.
String.fromCodePoint(65, 66, 67);

// 17. match(): The match() method returns the result of matching a string against a regular expression.
const exp = '/am/';
message.match(exp);

// 18. matchAll(): The matchAll() method returns an iterator of results after matching a string against a regular expression.
const sentence = "JavaScript1JavaScript2";
const regex = '/JavaScript\d/g';
sentence.matchAll(regex);

// 19. search(): The search() method searches for a match between a given string and a regular expression.
let sentence1= "I love JavaScript.";
let regExp = '/[A-Z]/';
sentence1.search(regExp);

// 20. replaceAll(): The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
let words = "ball bat";
words.replaceAll('b', 'c');
