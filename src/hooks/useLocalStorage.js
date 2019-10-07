import {useState} from 'react'


export const useLocalStorage = (key, initialValue) => {

     const [storedValue, setStoredValue] = useState(() => {
          if(localStorage.getItem(key)){
               return JSON.parse(window.localStorage.getItem(key))
          } else{
               return initialValue
          }
     })

     const setValue = value => {
          setStoredValue(value)
          window.localStorage.setItem(key, JSON.stringify(value));
     }

     return [storedValue, setValue]
}

/*
* to retrieve something from localStorage, we need the key
* to update something in localStorage - you use the same method as adding something new to replace key value
* setting a function as initial value of state = whatever callback function returns becomes initialValue

* if you pass in arrays or objects to localStorage, you will need to parse it into JSON
* when you retrieve it, like we do below, you'll need to parse it back into regular JS 

* to retrieve an item from localStorage, call localStorage.getItem('itemName)
* if that item doesn't exist, it will return undefined 
     const [storedValue, setStoredValue] = useState( () => {
          * get from local storage by key
          const item = window.localStorage.getItem(key)

          * parse and return stored JSON or, if undefined, return initialValue
          return item? JSON.parse(item) : initialValue;

     })


*/