import { useDispatch, useSelector } from 'react-redux';
import { ChoseColorAction, ChoseDateFrom, ChoseDateTo, ChoseRateAction, FetchRateAction } from '../../../../store/actions/order/order';
import { RootState } from '../../../../store/store';
import "react-datepicker/dist/react-datepicker.css";
import "../../../../styles/data-picker.css";
import s from './chosedls.module.css';
import DataPicker from 'react-datepicker';
import { SyntheticEvent, useEffect, useState } from 'react';
import { toUpperCase } from '../../../../utils/toUpperCase';
import { plusSevenDays } from '../../../../utils/dateFormat';
import { IRate } from '../../../../store/reducers/order/contracts/state';


interface IChoseDlsProps {
    changeActiveBtn: (value: boolean) => void;
    changePage: (p: number) => void;
}

const ChoseDls = ({ changeActiveBtn, changePage }: IChoseDlsProps) => {
    const colors = useSelector((state: RootState) => state.order.choseCar?.colors);
    const DLC = useSelector((state: RootState) => state.order.choseDLC);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(FetchRateAction())
    }, [])

    const onChangeHandle = (rate: IRate) => {
        if(DLC?.startDate && DLC.returnDate) {
            dispatch(ChoseRateAction(rate))
            changeActiveBtn(false);
            changePage(3);
            return
        }
        dispatch(ChoseRateAction(rate))
    }

    const choseDateFrom = (date:Date | [Date, Date] | null) => {
        if(!date) {
            changePage(2)
            changeActiveBtn(true)
        }
        dispatch(ChoseDateFrom(date))
    }

    const choseDateTo = (date:Date | [Date, Date] | null) => {
        console.log(date, 'HERE')
        if(!date) {
            dispatch(ChoseDateTo(date))
            changeActiveBtn(true);
            changePage(2);
            return;
        }
        if(DLC?.choseRate) {
            dispatch(ChoseDateTo(date))
            changeActiveBtn(false);
            changePage(3);
            return
        }
        dispatch(ChoseDateTo(date))
    }

    const handleChoseColor = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(ChoseColorAction(e.currentTarget.value))
    }

    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className={s.order__dls__elems}>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Цвет</span>
                        <div className={s.order__dls__row}>
                            <div className="order__form_elem">
                                <input onChange={handleChoseColor} className="custom-radio" id="any" type="radio" name="color" value="Любой" defaultChecked />
                                <label htmlFor="any">Любой</label>
                            </div>
                            {colors && colors.map(color => {
                                return (
                                    <div key={`${color}`} className="order__form_elem">
                                        <input onChange={handleChoseColor} className="custom-radio" id={`${color}`} type="radio" name="color" value={`${color}`} />
                                        <label htmlFor={`${color}`}>{toUpperCase(color)}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Дата аренды</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__mb}`}>
                            <label htmlFor="start_date">С</label>
                            <DataPicker id="start_date" selected={DLC?.startDate as Date} onChange={date => {
                                choseDateFrom(date)
                            }} isClearable showTimeSelect dateFormat="d.MM.yyyy h:MM" minDate={new Date()} timeFormat="p" placeholderText="Введите дату и время" className={`underline ${s.order__dls__date}`} />
                        </div>
                        <div className={`${s.order__dls__row} `}>
                            <label htmlFor="return_date">По</label>
                            <DataPicker id="return_date" selected={DLC?.returnDate as Date} onChange={date => {
                                choseDateTo(date)
                            }} isClearable disabled={DLC?.startDate ? false : true} showTimeSelect dateFormat="d.MM.yyyy h:MM" minDate={DLC?.choseRate?.rateTypeId?.unit === '7 дней' ? plusSevenDays(new Date(DLC.startDate as Date)): new Date(DLC?.startDate as Date)} timeFormat="p" placeholderText="Введите дату и время" className={`underline  ${s.order__dls__date}  ${s.order__dls__lp} `} />
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Тариф</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__row_bl}`}>
                            {DLC?.rates && DLC.rates.map(rate => {
                                return (
                                    <div key={rate.id} className={`order__form_elem ${s.order__dls_rate}`}>
                                        <input onChange={() => onChangeHandle(rate)} className="custom-radio" id={rate.id} type="radio" name="rate" value={rate.id} />
                                        <label htmlFor={rate.id}>{rate.rateTypeId.name}, {rate.price}₽/{rate.rateTypeId.unit}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Доп услуги</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__row_bl}`}>
                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input className="custom-checkbox" id="oil" type="checkbox" name="full" value="true" />
                                <label htmlFor="oil">Полный бак, 500р</label>
                            </div>
                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input className="custom-checkbox" id="baby" type="checkbox" name="child_safety_seat" value="true" />
                                <label htmlFor="baby">Детское кресло, 200р</label>
                            </div>
                            <div className={`order__form_elem`}>
                                <input className="custom-checkbox" id="right" type="checkbox" name="right_hand_drive" value="true" />
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
