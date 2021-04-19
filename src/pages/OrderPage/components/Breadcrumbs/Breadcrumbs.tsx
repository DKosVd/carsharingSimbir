import React from 'react'
import '../../../../styles/breadcrumbs.css'

export function Breadcrumbs() {
    const arr = [
        {title: 'Местоположение'},
        {title: 'Модель'},
        {title: 'Дополнительно'},
        {title: 'Итого'}
    ]

    return (
        <div className="breadcrumbs">   
            <div className="breadcrumbs__elems container">
                {arr.map( el => <span className="breadcrumbs__elem">{el.title}</span>)}
            </div>
        </div>
    )
}
