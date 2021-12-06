function validAnagram(firstWord, secondWord){
    if (firstWord.length !== secondWord.length){
        return false;
    }
    const obj = {}

    Array.from(firstWord).forEach(element => {
        obj[element] ? obj[element] += 1 : obj[element] = 1;
    });
    console.log(obj);
    let result = [];
    Array.from(secondWord).forEach(element => {
        console.log(obj[element], Array.from(secondWord).filter(el => el == element).length);
        result.push(obj[element] == Array.from(secondWord).filter(el => el == element).length ? true : false) 
    });
    return !result.includes(false);
}