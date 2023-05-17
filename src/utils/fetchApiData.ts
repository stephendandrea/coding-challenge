import { getAPIBaseURL } from "./config";

export const baseUrl = getAPIBaseURL();

export const fetchApiData = async () => {
  
  try {
    const res = await fetch(baseUrl);
    const json = await res.json();
    console.log(json)
    return json;
  } catch (error) {
    console.log(error)
    
  }
}