import s from './order.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { dateFormat } from '../../../../utils/dateFormat';
import { toUpperCase } from '../../../../utils/toUpperCase';

interface IOrderProps {
    active: number
    changePage: (p: number) => void
    showPopup: (b: boolean) => void
}

const Order = ({ active, changePage, showPopup }: IOrderProps) => {
    const numberOrder = useSelector((state: RootState) => state.order.id);
    const auto = useSelector((state: RootState) => state.order.choseCar);
    const price = useSelector((state: RootState) => state.order.price);
    const cityPlace = useSelector((state: RootState) => state.order.choseCity);
    const dlc = useSelector((state: RootState) => state.order.choseDLC);
    const date = dateFormat(dlc?.startDate as Date, dlc?.returnDate as Date)
    const btnOpt = useSelector((state: RootState) => state.order.btnOpt)[active];
    const handleChangePage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (active === 3) {
            showPopup(true)
            return
        }
        if (btnOpt.className) {
            changePage(active - 1)
            return
        }
        changePage(active + 1)
    }

    return (
        <div className={s.order__main}>
            <div className={s.order__title}>
                <h3>Ваш заказ:</h3>
            </div>
            <div className={s.order__details}>
                {cityPlace?.city.name && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Пункт выдачи</span>
                    <span className={s.order__detail__value}>{cityPlace?.city?.name}, {cityPlace.address ? `${cityPlace?.address?.name}, ${cityPlace?.address?.address}`.split(',').splice(1).join(','): ''}</span>
                </div>}
                {dlc?.color && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Цвет</span>
                    <span className={s.order__detail__value}>{toUpperCase(dlc.color)}</span>
                </div>}
                {dlc?.returnDate && dlc?.startDate && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Длительность аренды</span>
                    <span className={s.order__detail__value}>{`${date[0] ? date[0] + 'д' : ''}${isNaN(date[1]) ? '' : date[1] + 'ч'}`}</span>
                </div>}
                {dlc?.choseRate && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Тариф</span>
                    <span className={s.order__detail__value}>{dlc.choseRate.rateTypeId.name}</span>
                </div>}
                {dlc?.dlc?.fullOil?.isPresent && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Полный бак</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>}
                {dlc?.dlc?.babySeat?.isPresent &&<div className={s.order__detail}>
                    <span className={s.order__detail__name}>Детское кресло</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>}
                { dlc?.dlc?.rightDrive?.isPresent && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Правый руль</span>
                    <span className={s.order__detail__value}>Да</span>
                </div>}
                {auto && <div className={s.order__detail}>
                    <span className={s.order__detail__name}>Модель</span>
                    <span className={s.order__detail__value}>{auto.name}</span>
                </div>}
            </div>
            {auto && <div className={s.order_price}>
                <h4 className={s.order__price__elem}>Цена: {price ? <span  className={s.order__price__value}>{price} ₽</span> : <span className={s.order__price__value}>от {auto.priceMin} до {auto.priceMax} ₽</span>} </h4>
            </div>}
            {numberOrder ? <button className={`btn btn-book btn-detail__red btn-full`} >Отменить</button>:
            <button className={`btn btn-book ${btnOpt.className ? 'btn-detail__red' : ''} btn-full`} disabled={btnOpt.isDisabled} onClick={handleChangePage}>{btnOpt.name}</button>}
        </div>
    )
}

export default Order;