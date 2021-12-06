function averagePair(){
    let found = false;
    arguments[0].forEach(element => {
        arguments[0].forEach(element2 => {
            if(arguments[0].indexOf(element) !== arguments[0].indexOf(element2)) {
                if ((element + element2)/2 === arguments[1]) {
                    found = true;
                }
            }
        });
    });
    return found;
}