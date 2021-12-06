function sameFrequency(firstNumber, secondNumber){
    if (Array.from(firstNumber.toString()).length !== Array.from(secondNumber.toString()).length){
        return false;
    }
    const obj = {}

    Array.from(firstNumber.toString()).forEach(element => {
        obj[element] ? obj[element] += 1 : obj[element] = 1;
    });
    console.log(obj);
    let result = [];
    Array.from(secondNumber.toString()).forEach(element => {
        result.push(obj[element] == Array.from(secondNumber.toString()).filter(el => el == element).length ? true : false) 
    });
    return !result.includes(false);
  }
  
  console.log(sameFrequency(182, 281));