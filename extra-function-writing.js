// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) {
        return x
    }
    else if (x < y) {
        return y
    }
    else {
        return x
    }
}
console.assert(max(1,2) === 2)
console.assert(max(2,1) === 2)
console.assert(max(2,2) === 2)

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    return Math.max(x, y, z)
}
console.assert(maxOfThree(1, 2, 3) === 3)

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(x){
    if (x.length === 1) {
        if (/[aeiou]/i.test(x) === true) {
            return true
        } else {
            return false
        }
    } else {
        return 'Only input one character'
    }
}
console.assert(isVowel('abc') === 'Only input one character')
console.assert(isVowel('a') === true)
console.assert(isVowel('b') === false)

// ---------------------
// Write a function translate() that will translate a text into "Rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var phrase = Array.from(phrase)
    var newPhrase = ''
    for (var i = 0; i < phrase.length; i++) {
        if ((/[aeiou]/i.test(phrase[i]) === false) && (phrase[i] !== ' ')) {
            newPhrase += (phrase[i] += 'o' + phrase[i])
        } else {
            newPhrase += phrase[i]
        }
    }
    return newPhrase
}
console.assert(rovarspraket('this is fun') === 'tothohisos isos fofunon')

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split('').reverse().join('')
}
console.assert(reverse('hi there') === 'ereht ih')

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(a, b, c, d){
    var set = new Set([a, b, c, d])
    var array = Array.from(set)

    var length = 0
    var longest
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            var length = array[i].length
            longest = array[i]
        }
    }
    return longest
}

console.assert(findLongestWord('one','two','three','four') === 'three')
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, n){
    var array = words.split(',')

    var finalArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > n) {
            finalArray.push(array[i])
        }
    }
    return finalArray
}
console.assert(filterLongWords('abc,abcd,abcde,abcdef', 4).length === 2)
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    string.split('')
    var chars = []
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i)
        if(chars[char] === undefined) {
            chars[char] = 0
        }
        chars[char]++
    }
    return chars
}
console.log(charFreq('abbabcbdbabdbdbabababcbcbab'))
