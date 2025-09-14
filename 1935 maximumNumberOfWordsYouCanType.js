//Problem - 33
//beats 41% in Time Complexity
//beats 12% in Space complexity 
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let letterMap = {},count=0,string = "",textArr=[]
    for(let i=0;i<brokenLetters.length;i++) letterMap[brokenLetters[i]] = true
    for(let i=0;i<text.length;i++){
        if(text[i] === ' ') {
            textArr.push(string)
            string = ''
        }else string = string + text[i]
    }
    textArr.push(string)
    if(brokenLetters=== "") return textArr.length

    textArr.forEach(item =>{
        for(let i=0;i<item.length;i++){
            if(letterMap.hasOwnProperty(item[i])) {
                count++
                break
            }
        }
    })
    console.log(letterMap)
    return textArr.length-count
};
