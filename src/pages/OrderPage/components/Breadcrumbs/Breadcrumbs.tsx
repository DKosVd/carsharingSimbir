import React from 'react'
import s from './breadcrumbs.module.css';

export function Breadcrumbs() {
    const arr = [
        {title: 'Местоположение'},
        {title: 'Модель'},
        {title: 'Дополнительно'},
        {title: 'Итого'}
    ]

    return (
        <div className={s.breadcrumbs}>   
            <div className={`${s.breadcrumbs__elems} container`}>
                {arr.map( el => <span className={s.breadcrumbs__elem}>{el.title}</span>)}
            </div>
        </div>
    )
}
