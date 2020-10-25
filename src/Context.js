import React  , {createContext, useState} from 'react'
const EmojiiContext = createContext("");

function EmojiiProvider (props){
    const [emojii , setEmojii] = useState("") ;
    function handleEmojiiChange (newValue){
        setEmojii(newValue);
    }
    return(
        <EmojiiContext.Provider value = {{emojii , handleEmojiiChange}}>
                {props.children}
        </EmojiiContext.Provider>
    )
} 
export {EmojiiContext ,EmojiiProvider } ;