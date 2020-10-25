import React from 'react'
import ClassNames from "./SearchResult.module.scss";
function SearchResutlRow({ title, symbol}) {
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
        <div 
            className= {`${ClassNames.EmojiiResult} copy-to-clipboard`}
            data-clipboard-text={symbol}
        >
            <div className = {ClassNames.Wrapper}>
                <img alt={title} src={src} />
                <span className= {ClassNames.Title}>{title}</span>
            </div>
            <span className= {ClassNames.Info}>Click to copy emoji</span>
        </div>
    )
}

export default SearchResutlRow