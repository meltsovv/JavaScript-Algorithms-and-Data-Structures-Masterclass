function countUniqueValues(array){
    if (!array.length){
        return 0;
    }
    const obj = {}

    array.forEach(element => {
        obj[element] = 1;
    });
    console.log(obj);
    return Object.keys(obj).length;
}