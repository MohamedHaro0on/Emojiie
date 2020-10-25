import React from 'react'
import ClassNames from "./Header.module.scss";
function Header() {
    return (
        <header className={ClassNames.Header}>
            <h1>
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt = "emojii" />
                <span>emojii search</span>
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt = "emojii" />
            </h1>
        </header>
    )
}

export default Header ;