const firstNonRepEl = (str) => {
    const newStr = str.toLowerCase();
    for (const el of newStr) {
        if(newStr.indexOf(el) === newStr.lastIndexOf(el) ){
            return el;
        }
    }
    return null;
}


console.log(firstNonRepEl('!cscsdsvsv'));