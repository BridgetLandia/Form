import {useState, useEffect} from 'react';

function UseLocalStorageState(key, defaultVal) {
    // make piece of state, based off of value in localstorage (or deafult)
    const[state, setState] = useState(() => {
        let val;
        try{
           val = JSON.parse(window.localStorage.getItem(key)) || String(defaultVal)
        }
        catch(e){
            val = defaultVal
        }
        return val;
    });
    //
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState]
}
 export default UseLocalStorageState;