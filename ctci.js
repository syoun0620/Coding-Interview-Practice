// 1.3 URLify
function URLify(input, num){
    var inputArr = input.split("")
    console.log(inputArr)
    var j = input.length-1
    for (var i = num-1; i>= 0; i--){
        if (inputArr[i] === " "){
            inputArr[j] = "0"
            inputArr[j-1] = "2"
            inputArr[j-2] = "%"
            j -= 3
        }
        else {
            inputArr[j] = inputArr[i]
            j--
        }
    }
    console.log("AFTER")
    console.log(inputArr.join(""))

}
// console.log(URLify("Mr John Smith    ", 13))

// 1.4 Palindrome Permutation.

function palindromePermutation(str){
    var hash = {}
    var numSpace = 0
    for (let i = 0; i<str.length; i++){
        if (str[i] === " "){
            numSpace++
            continue
        }
        else if (hash.hasOwnProperty(str[i])){
            hash[str[i]]++
        }
        else{
            hash[str[i]] = 1
        }
    }
    console.log(hash)
    var isEven = (str.length-numSpace)%2 === 0 ? true:false
    var keys = Object.keys(hash)
    console.log(keys)
    // console.log(isEven)
    if (isEven){ // all chars have to have even number.
        for (let i = 0; i<keys.length; i++){
            if (hash[keys[i]]%2 !== 0){
                return false
            }
        }
    }
    else{ // if odd
        var bool = false
        for (let i = 0; i<keys.length; i++){
            if (hash[keys[i]]%2 !== 0){
                if (bool){
                    return false
                }
                bool = true
            }
        }
    }
    return true
}

// console.log(palindromePermutation("race eecar"))

// 1.5 One Away

// 1.6 String Compression
// ex) aabcccccaaa  ==> a2b1c5a3
function stringCompression(str){
    var compressed = ""
    var counter = 0
    for (let i = 0; i<str.length; i++){
        counter++
        if (i === str.length-1 || str[i] !== str[i+1]){
            compressed += str[i] + counter
            counter = 0
        }
    }
    return compressed
}

console.log(stringCompression("aabcccccaaab"))
