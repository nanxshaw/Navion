

const textLimit = (text, num) => {
    let tx = text;
    if(text.length >= num){
        tx = text.substr(0, num)+'...'
    }
    return tx;
}


export default {
    textLimit
}