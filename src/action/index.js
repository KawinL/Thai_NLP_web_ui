import axios from "axios";


const TOKENIZE_WORD = 'TOKENIZE_WORD';
const VECTORIZE_WORD = 'VECTORIZE_WORD'; 
const NER_CONSTANCE = "NER_CONSTANCE";
const POS_CONSTANCE = 'POS_CONSTANCE';
const MOCK_DATA = 'MOCK_DATA'

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
    const request = axios.post(url, data);
    const payload = request.then((data) =>{
        return data.data;
    });
    // const request = axios.post(url,{text: words});
    return { type: VECTORIZE_WORD, payload }
}

export function NER(type, text) {
  // const url = "http://demo1079282.mockable.io/tokenizer";
  if(text==="https://www.mockups.com/best"){
    return {
      type: MOCK_DATA,
    }
  }
  const url = "/ner";
  const mapping = { TEXT: "raw_text", URL: "webpage" };
  let data = { type: mapping[type], url: text, text };
  console.log(data);
  const request = axios.post(url, data);
  const payload = request.then(data => {
    console.log("data", data);
    console.log("data.data", data.data);
    return data.data;
  });
  return { type: NER_CONSTANCE, payload };
}

export function POS(type, text) {
  if (text === "https://www.mockups.com/best") {
    return { type: MOCK_DATA };
  }
  const url = "/pos";
  const mapping = { TEXT: "raw_text", URL: "webpage" };
  let data = { type: mapping[type], url: text, text };
  console.log(data);
  const request = axios.post(url, data);
  const payload = request.then(data => {
    console.log("data", data);
    console.log("data.data", data.data);
    return data.data;
  });
  return { type: POS_CONSTANCE, payload };
}

export {
    TOKENIZE_WORD, 
    VECTORIZE_WORD,
    NER_CONSTANCE,
    POS_CONSTANCE,
    MOCK_DATA
};