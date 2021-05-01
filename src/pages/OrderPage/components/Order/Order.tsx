import React, { useState, useEffect } from 'react'
import s from './order.module.css';
import {axios} from '../../../../utils/axios'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const Order = () => {   
    const auto = useSelector( (state: RootState) => state.order.choseCar)
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
                    <span className={s.order__detail__name}>Модель</span>
                    <span className={s.order__detail__value}>SONATA</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Цвет</span>
                    <span className={s.order__detail__value}>Голубой</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Длительность аренды</span>
                    <span className={s.order__detail__value}>1д 2ч</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Тариф</span>
                    <span className={s.order__detail__value}>На сутки</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Полный бак</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Детское кресло</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>
                <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Правый руль</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>
                {auto && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Модель</span>
                    <span className={s.order__detail__value}>{auto.model}</span>
                </div>}
            </div>
            {auto &&<div className={s.order_price}>
                <h4 className={s.order__price__elem}>Цена: <span className={s.order__price__value}>от {auto.minprice} до {auto.maxprice} Р</span></h4>
            </div>}
            <button className="btn btn-book btn-full" onClick={ ( (e: React.MouseEvent) => e.stopPropagation())}>Выбрать модель</button>
        </div>
    )
}

export default Order;