import React from 'react'
import { Main } from './components/Main/Main'
import { Slider } from './components/Slider/Slider'
import '../../styles/mainPage.css'

export function MainPage() {
    

    return (
        <div className="wrapper">
            <Main/>
            <Slider/>
        </div>
    )
}
