function findRotatedIndex(array, number){
    if (array.filter(el => el === number).length === 0){
        return -1;
    }
    
    return array.indexOf(number);
}