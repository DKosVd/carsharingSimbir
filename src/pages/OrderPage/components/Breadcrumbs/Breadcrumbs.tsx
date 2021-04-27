import React from 'react';
import s from './breadcrumbs.module.css';

export function Breadcrumbs({active, changePage}: {active: number, changePage: (page: number) => void}) {
    const arr = [
        {title: 'Местоположение'},
        {title: 'Модель'},
        {title: 'Дополнительно'},
        {title: 'Итого'}
    ]

    const handleChange = (e: React.MouseEvent<HTMLSpanElement>, page: number) => {
        if((e.target as Element).classList.contains(s.breadcrumbs__elem_accept)) {
            changePage(page)
        }
    }

    return (
        <div className={s.breadcrumbs}>   
            <div className={`${s.breadcrumbs__elems} container`}>
                {arr.map( (el, idx) => <span key={`${idx}__${el.title}`} onClick={(e) => handleChange(e, idx)} className={`${s.breadcrumbs__elem} ${active === idx ? s.breadcrumbs__elem_active :''} ${idx < active ? s.breadcrumbs__elem_accept : '' }`}>{el.title}</span>)}
            </div>
        </div>
    )
}
