import React, { useContext  , memo } from 'react'
import filterEmoji from "../FilterEmojii";
import {EmojiiContext} from "../Context";
import SearchResutlRow from './SearchResutlRow';
import ClassNames from "./SearchResult.module.scss";

function SearchResult() {
    const {emojii} = useContext(EmojiiContext);
    const Emojiies = filterEmoji(emojii , 20) ;
    return (
        <div className = {ClassNames.Container}>
            {Emojiies.map((element) =>{
                return(
                    <SearchResutlRow
                        title = {element.title}
                        symbol = {element.symbol}
                        key = {element.title}
                    />
                )
            })}
        </div>
    )
}

export default memo(SearchResult);