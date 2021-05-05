import React from 'react';
import s from './chosedls.module.css';


interface IChoseDlsProps {
    changeActiveBtn: (value: boolean) => void;
}

const ChoseDls = ({changeActiveBtn}: IChoseDlsProps) => {
    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className={s.order__dls__elems}>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Цвет</span>
                        <div className={s.order__dls__row}>
                            <div className="order__form_elem">
                                <input className="custom-radio" id="any" type="radio" name="color" value="any" defaultChecked />
                                <label htmlFor="any">Любой</label>
                            </div>
                            <div className="order__form_elem">
                                <input className="custom-radio" id="red" type="radio" name="color" value="red"  />
                                <label htmlFor="red">Красный</label>
                            </div>
                            <div className="order__form_elem">
                                <input className="custom-radio" id="blue" type="radio" name="color" value="blue"  />
                                <label htmlFor="blue">Голубой</label>
                            </div>
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Дата аренды</span>
                        <div className={s.order__dls__row}>
                            <label htmlFor="order_date">С</label>
                            <input type="date" id="order_date" className="underline" placeholder="Введите дату и время"/>
                        </div>
                        <div className={`${s.order__dls__row}`}>
                            <label htmlFor="order_date">По</label>
                            <input type="date" id="order_date" className="underline" placeholder="Введите дату и время"/>
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Тариф</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__row_bl}`}>

                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input className="custom-radio" id="minutes" type="radio" name="rate" value="minutes" defaultChecked />
                                <label htmlFor="minutes">Поминутно, 7₽/мин</label>
                            </div>
                        
                            <div className="order__form_elem">
                                <input className="custom-radio" id="day" type="radio" name="rate" value="day"/>
                                <label htmlFor="day">На сутки, 1999 ₽/сутки</label>
                            </div>

                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Доп услуги</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__row_bl}`}>
                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input id="oil" type="checkbox" name="full" value="true"/>
                                <label htmlFor="oil">Полный бак, 500р</label>
                            </div>
                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input id="baby" type="checkbox" name="child_safety_seat" value="true"/>
                                <label htmlFor="baby">Детское кресло, 200р</label>
                            </div>
                            <div className={`order__form_elem`}>
                                <input id="right" type="checkbox" name="right_hand_drive" value="true"/>
                                <label htmlFor="right">Правый руль, 1600р</label>
                            </div>
                        </div>
                    </div>  
                </form>
            </div>

        </>
    )
}

export default ChoseDls;
