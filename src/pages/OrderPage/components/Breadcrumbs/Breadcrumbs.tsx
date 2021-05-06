import React from 'react';
import s from './breadcrumbs.module.css';

export function Breadcrumbs({active, changePage, currentActive}: {active: number, changePage: (page: number) => void, currentActive: number}) {
    const arr = [
        {title: 'Местоположение'},
        {title: 'Модель'},
        {title: 'Дополнительно'},
        {title: 'Итого'}
    ]
    const [show, setShow] = React.useState<boolean>(false)
    const ref = React.createRef<HTMLDivElement>()
    React.useEffect( () => {

        function handle(e: MouseEvent):void {
            if(ref.current && show && !ref.current.contains((e.target as Node))) {
                setShow(!show)
            }
        }

        window.addEventListener('click', handle);
        return () => window.removeEventListener('click', handle)
    }, [ref, show, setShow])


    const handleChange = (e: React.MouseEvent<HTMLSpanElement>, page: number) => {
        if((e.target as Element).classList.contains(s.breadcrumbs__elem_accept)) {
            changePage(page)
        }
    }
    
    const handleShow = (e: React.MouseEvent) => {
        setShow(!show)
    }

    return (
        <div className={s.breadcrumbs}>   
            <div className={`${s.breadcrumbs__elems} ${s.breadcrumbs__ds} container ${s.breadcrumbs__menu}`}>
                {arr.map( (el, idx) => <span key={`${idx}__${el.title}`} onClick={(e) => handleChange(e, idx)} className={`${s.breadcrumbs__elem} ${idx <= active ? s.breadcrumbs__elem_accept : '' } ${currentActive === idx ? s.breadcrumbs__elem_active :''} `}>{el.title}</span>)}
            </div>
            <div ref={ref} className={`${s.breadcrumbs__elems} ${s.breadcrumbs__mb}  ${s.breadcrumbs__menu} ${show ? s.breadcrumbs__menu_open : s.breadcrumbs__menu_hide}`} onClick={handleShow}>
                {arr.map( (el, idx) => <span key={`${idx}__${el.title}`} onClick={(e) => handleChange(e, idx)} className={`${s.breadcrumbs__elem} ${idx <= active ? s.breadcrumbs__elem_accept : '' } ${currentActive === idx ? s.breadcrumbs__elem_active :''} `}>{el.title}</span>)}
            </div>
        </div>
    )
}
