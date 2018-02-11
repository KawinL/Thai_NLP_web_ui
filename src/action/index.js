import axios from "axios";


const TOKENIZE_WORD = 'TOKENIZE_WORD';
const VECTORIZE_WORD = 'VECTORIZE_WORD' 

export function tokenizeWord(type, text) {
    // const url = "http://demo1079282.mockable.io/tokenizer";
    const url = "/tokenize"
    const mapping = { TEXT: "raw_text", URL: "webpage" };
    let data = { type: mapping[type], url: text, text };
    console.log(data)
    const request = axios.post(url,data);
    return { type: TOKENIZE_WORD, payload: request };
}



export function vectorizeWord(word_list){
    const url = "/vector_distance";
    let data = { word_list };
    console.log(data);
    const request = axios.post(url, data);
    const payload = request.then((data) =>{
        console.log('data', typeof(data));
        console.log('data.data', typeof(data.data));
        return data.data;
    });
    // const request = axios.post(url,{text: words});
    return { type: VECTORIZE_WORD, payload }
}
export {
    TOKENIZE_WORD, 
    VECTORIZE_WORD
};