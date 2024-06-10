// a custom hook is nothing but a function which does some things. other hooks can be used.

import {useEffect , useState} from "react"

function useCurrencyInfo(currency){

    //this custom hook will return data through this use state.
     const [data,setData] = useState({})//empty object so if no respnose comes it will not crash

    //when hook loads ,then we want to call the api, thats why we use useEffect
    useEffect(() =>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) =>res.json())
        .then((res) =>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

//so this hook is returning the data of the api call, this is our custom hook.

export default useCurrencyInfo;