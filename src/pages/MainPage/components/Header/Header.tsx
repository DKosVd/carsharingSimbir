import React from 'react'
import '../../../../styles/header.css'
import { Map } from "@styled-icons/boxicons-regular/Map"

export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <h3 className="header__content__title">Need for drive</h3>
                <div className="header__content__location">
                    <Map width={"32px"} height={"26px"} color={'#999999'}/>
                    <span className="header__content__city"> Ульяновск</span>
                </div>
            </div>
        </header>
    )
}
