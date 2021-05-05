import React from 'react'
import '../../../styles/header.css'
import { Map } from "@styled-icons/boxicons-regular/Map"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

export default function Header() {
    const city = useSelector(( state: RootState) => state.order.choseCity?.city)
    return (
        <header className="header">
            <div className="header__content">
                <h3 className="header__content__title">Need for drive</h3>
                <div className="header__content__location">
                    {
                        city && <><Map width={"32px"} height={"26px"} color={'#999999'}/>
                        <span className="header__content__city"> {city}</span></>
                    }
                </div>
            </div>
        </header>
    )
}
