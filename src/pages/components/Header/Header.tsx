import React from 'react'
import '../../../styles/header.css'
import { Location } from "@styled-icons/evil/Location"

export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <h3 className="header__content__title">Need for drive</h3>
                <div className="header__content__location">
                    <Location width={"15px"} height={"18px"} />
                    <span className="header__content__city"> Ульяновск</span>
                </div>
            </div>
        </header>
    )
}
