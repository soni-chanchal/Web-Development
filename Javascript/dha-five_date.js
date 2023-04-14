// Date(): Returns the function that created the Date object's prototype
let date = new Date()
console.log(date)

// 1. toDateString(): Converts the date portion of a Date object into a readable string
console.log(date.toDateString())

// 2. getDate(): Returns the day of the month (from 1-31)
console.log(date.getDate())

// 3. getDay(): Returns the day of the week (from 0-6)
console.log(date.getDay())

// 4. getFullYear(): Returns the year
console.log(date.getFullYear())

// 5.getHours(): Returns the hour (from 0-23)
console.log(date.getHours())

// 6. getMilliseconds(): Returns the milliseconds (from 0-999)
console.log(date.getMilliseconds())

// 7. getMinutes(): Returns the minutes (from 0-59)
console.log(date.getMinutes())

// 8. getMonth(): Returns the month (from 0-11)
console.log(date.getMonth())

// 9. getSeconds(): Returns the seconds (from 0-59)
console.log(date.getSeconds())

// 10.getTime(): Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
console.log(date.getTime())

// 11. getTimezoneOffset(): Returns the time difference between UTC time and local time, in minutes
console.log(date.getTimezoneOffset())

// 12. getUTCDate(): Returns the day of the month, according to universal time (from 1-31)
console.log(date.getUTCDate())

// 13. getUTCDay(): Returns the day of the week, according to universal time (from 0-6)
console.log(date.getUTCDay())

// 14. getUTCFullYear(): Returns the year, according to universal time
console.log(date.getUTCFullYear())

// 15.getUTCHours(): Returns the hour, according to universal time (from 0-23)
console.log(date.getUTCHours())

// 16. getUTCMilliseconds(): Returns the milliseconds, according to universal time (from 0-999)
console.log(date.getHours())

// 17. getUTCMinutes(): Returns the minutes, according to universal time (from 0-59)
console.log(date.getUTCMinutes())

// 18. getUTCMonth(): Returns the month, according to universal time (from 0-11)
console.log(date.getUTCMonth())

// 19. getUTCSeconds(): Returns the seconds, according to universal time (from 0-59)
console.log(date.getUTCSeconds())

// 20. toJSON(): Returns the date as a string, formatted as a JSON date
console.log(date.toJSON())