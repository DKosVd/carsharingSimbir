import { useDispatch, useSelector } from 'react-redux';
import { ChoseColorAction } from '../../../../store/actions/order/order';
import { RootState } from '../../../../store/store';
import "react-datepicker/dist/react-datepicker.css";
import "../../../../styles/data-picker.css";
import s from './chosedls.module.css';
import DataPicker from 'react-datepicker';
import { useState } from 'react';


interface IChoseDlsProps {
    changeActiveBtn: (value: boolean) => void;
}

const ChoseDls = ({ changeActiveBtn }: IChoseDlsProps) => {
    const colors = useSelector((state: RootState) => state.order.choseCar?.colors);
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);

    const handleChoseColor = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(ChoseColorAction(e.currentTarget.value))
        changeActiveBtn(false)
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
                                        <label htmlFor={`${color}`}>{color}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Дата аренды</span>
                        <div className={`${s.order__dls__row} `}>
                            <label htmlFor="order_date">С</label>
                            <DataPicker id="order_date" selected={startDate as Date} onChange={date => {
                                setStartDate(date)
                            } } isClearable showTimeSelect  dateFormat="d.MM.yyyy h:mm" placeholderText="Введите дату и время" className={`underline ${s.order__dls__date}`}/>
                        </div>
                        <div  className={`${s.order__dls__row} `}>
                            <label htmlFor="return_date">По</label>
                            <DataPicker id="return_date" selected={startDate as Date} onChange={date => {
                                setStartDate(date)
                            } } isClearable showTimeSelect  dateFormat="d.MM.yyyy h:mm" placeholderText="Введите дату и время" className={`underline ${s.order__dls__date}`}/>
                        </div>
                        <span className={`${s.order__dls__elems__title} ${s.order__dls__elems__title_mb}`}>Тариф</span>
                        <div className={`${s.order__dls__row} ${s.order__dls__row_bl}`}>
                            <div className={`order__form_elem ${s.order__dls_rate}`}>
                                <input className="custom-radio" id="minutes" type="radio" name="rate" value="minutes" defaultChecked />
                                <label htmlFor="minutes">Поминутно, 7₽/мин</label>
                            </div>

                            <div className="order__form_elem">
                                <input className="custom-radio" id="day" type="radio" name="rate" value="day" />
                                <label htmlFor="day">На сутки, 1999 ₽/сутки</label>
                            </div>

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
