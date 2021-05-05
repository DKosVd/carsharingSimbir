import s from './order.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

interface IOrderProps {
    active: number
    changePage:(p: number) => void
}

const Order = ({active, changePage}: IOrderProps) => {   
    const auto = useSelector( (state: RootState) => state.order.choseCar)
    const cityPlace = useSelector( (state: RootState) => state.order.choseCity)
    const btnOpt = useSelector( (state: RootState) => state.order.btnOpt)[active]

    const handleChangePage = (e: React.MouseEvent) => {
        e.stopPropagation()
        changePage(active + 1)
    }

    return (
        <div className={s.order__main}>
            <div className={s.order__title}>
                <h3>Ваш заказ:</h3>
            </div>
            <div className={s.order__details}>
                {cityPlace?.city && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Пункт выдачи</span>
                    <span className={s.order__detail__value}>{cityPlace.city}, {cityPlace?.address?.split(',').splice(1).join(',')}</span>
                </div>}
                {/* <div className={s.order__detail}>
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
                </div> */}
                {auto && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Модель</span>
                    <span className={s.order__detail__value}>{auto.model}</span>
                </div>}
            </div>
            {auto &&<div className={s.order_price}>
                <h4 className={s.order__price__elem}>Цена: <span className={s.order__price__value}>от {auto.minprice} до {auto.maxprice} Р</span></h4>
            </div>}
            <button className="btn btn-book btn-full" disabled={btnOpt.isDisabled} onClick={handleChangePage}>{btnOpt.name}</button>
        </div>
    )
}

export default Order;