import { useState, useEffect } from 'react'
import s from './order.module.css';
import {axios} from '../../../../utils/axios'

const Order = () => {   

    useEffect( () => {
        async function getData() {
            const {data} = await axios.get('/api/db/point')
            
        }
        getData()
    }, [])

    return (
        <div className={s.order__main}>
            <div className={s.order__title}>
                <h3>Ваш заказ:</h3>
            </div>
            <div className={s.order__details}>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Пункт выдачи </span>
                    <span className={s.order__detail__value}>Ульяновск, Нариманова 42</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>П</span>
                    <span className={s.order__detail__value}>Ульяновск, Нариманова 42</span>
                </div>
            </div>
            <div className={s.order_price}>
                <h4 className={s.order__price__elem}>Цена: <span className={s.order__price__value}>от 8000 до 12000 Р</span></h4>
            </div>
            <button className="btn btn-book btn-full">Выбрать модель</button>
        </div>
    )
}

export default Order;