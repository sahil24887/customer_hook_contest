import React,{useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    const [value, setValue] = useState(storedValue?JSON.parse(storedValue): initialValue)

    const updateValue = (newValue) =>{
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    const handleButtonClick = () =>{
        localStorage.setItem('key',key)
    }
  return [value, updateValue, handleButtonClick]
}

export default useLocalStorage
