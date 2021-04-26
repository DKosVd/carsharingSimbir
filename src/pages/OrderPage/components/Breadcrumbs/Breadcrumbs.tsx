import s from './breadcrumbs.module.css';

export function Breadcrumbs({active}: {active: number}) {
    const arr = [
        {title: 'Местоположение'},
        {title: 'Модель'},
        {title: 'Дополнительно'},
        {title: 'Итого'}
    ]

    return (
        <div className={s.breadcrumbs}>   
            <div className={`${s.breadcrumbs__elems} container`}>
                {arr.map( (el, idx) => <span key={`${idx}__${el.title}`} className={`${s.breadcrumbs__elem} ${active === idx ? s.breadcrumbs__elem_active :''} ${idx < active ? s.breadcrumbs__elem_accept : '' }`}>{el.title}</span>)}
            </div>
        </div>
    )
}
