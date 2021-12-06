function sameFrequency(){
    const obj = {}
    Object.values(arguments).forEach(element => {
        console.log(element);
        obj[element] ? obj[element] += 1 : obj[element] = 1;
    });
    return Object.values(obj).filter(el => el === 1).length !== Object.values(arguments).length
}