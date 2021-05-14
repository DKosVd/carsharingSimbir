import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { isBaseImg } from '../../../../utils/isBase64';
import s from './total.module.css'

interface ITotalProps {
    changeActiveBtn: (value: boolean) => void;
    changePage: (p: number) => void;
    result?: boolean;
}


const Total = ({ changeActiveBtn, changePage, result }: ITotalProps) => {

    const car = useSelector((state: RootState) => state.order.choseCar);

    useEffect(() => {
        changeActiveBtn(false)
    }, [])

    if (!car) {
        return null
    }

    return (
        <>
            <div className={s.total__main}>
                <div className={s.total__order}>
                    <div className={s.total__order_info}>
                        {result && <h1 className={s.total__order__result}>Ваш заказ подтверждён</h1>}
                        <h4 className={`${s.total__order_info_title}`}>{car.name}</h4>
                        {car?.number && <span className={`${s.total__order__info_number} ${s.total__order_info_elem}`}>
                            <span className={s.total__order__info__number_mr}> {car.number[0]} </span>
                            <span className={s.total__order__info__number_mr}> {car.number.slice(1, 4)} </span>
                            <span className={s.total__order__info__number_mr}>{car.number.slice(4, 6)}</span>
                            <span>{car.number.slice(6)}</span>
                        </span>}
                        <span className={s.total__order_info_elem}><b>Топливо </b>&nbsp; 100%</span>
                        <span className={s.total__order_info_elem}><b>Доступна с </b>&nbsp; 12.06.2019 12:00</span>
                    </div>
                    <div className={s.total__order_img}>
                        <div className={s.total__order__img} style={{ backgroundImage: `url(${isBaseImg(car.thumbnail.path)})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Total
