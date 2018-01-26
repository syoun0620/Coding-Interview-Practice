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

//hello
// testing
