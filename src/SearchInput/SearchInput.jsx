import React  , {useContext , memo} from 'react'
import {EmojiiContext} from "../Context";
import ClassNames from "./SearchInput.module.scss";

function SearchInput() {
    const {emojii ,  handleEmojiiChange } = useContext(EmojiiContext);
    return (
        <form className = {ClassNames.Form}>
            <input
                placeholder  = "Search for Emojii" 
                value = {emojii}
                onChange = {(e)=>handleEmojiiChange(e.target.value)}
                className = {ClassNames.FormControl}            
            />
        </form>
    )
}

export default memo (SearchInput) ;
