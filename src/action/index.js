import axios from "axios";


const TOKENIZE_WORD = 'TOKENIZE_WORD';
const VECTORIZE_WORD = 'VECTORIZE_WORD' 

export function tokenizeWord(sentence) {
    console.log(sentence)
    const url = "http://demo1079282.mockable.io/tokenizer";

    const request = axios.post(url,{text: sentence});
    return { type: TOKENIZE_WORD, payload: request };
}

export function vectorizeWord(words){
    const url = "http://demo1079282.mockable.io/vectorize";

    const request = axios.post(url,{text: words});
    return{
        type: VECTORIZE_WORD,
        payload: request
    }
}
export {
    TOKENIZE_WORD, 
    VECTORIZE_WORD
};