import { useState } from 'react';
import s from './chosecar.module.css';
import car from '../../../../assets/static/car.png'
import { useDispatch } from 'react-redux';
import { ChoseCarAction } from '../../../../store/actions/order/order';

const ChoseCar = () => {
    const [auto, setAuto] = useState<number | null>(null)
    const autos = [{ model: 'SONATA', minprice: 10000, maxprice: 32000 },
        { model: 'SONATA', minprice: 10000, maxprice: 329000 },
        { model: 'SONATA', minprice: 1000, maxprice: 320800 },
        { model: 'SONATA', minprice: 105000, maxprice: 328000 },
        { model: 'SONATA', minprice: 100200, maxprice: 327000 },
        { model: 'SONATA', minprice: 100050, maxprice: 327000 },
        { model: 'SONATA', minprice: 104000, maxprice: 3205600 },
        { model: 'SONATA', minprice: 105000, maxprice: 320800 }
    ]
    const dispatch = useDispatch()
    
    const setActiveCar = (id: number, el: {model: string, minprice: number, maxprice: number}) => {
        dispatch(ChoseCarAction(el))
        setAuto(id)
    }

    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className={s.order__form}>
                        <div className="order__form_elem">
                            <input className="custom-radio" id="all" type="radio" name="type_car" value="all" defaultChecked />
                            <label htmlFor="all">Все модели</label>
                        </div>
                        <div className="order__form_elem">
                            <input className="custom-radio" id="mid" type="radio" name="type_car" value="economy" />
                            <label htmlFor="mid">Эконом</label>
                        </div>
                        <div className="order__form_elem">
                            <input className="custom-radio" id="vip" type="radio" name="type_car" value="premium" />
                            <label htmlFor="vip">Премиум</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className={s.order__cars}>
                {autos.map((el: any, idx: number) => {
                    return (
                        <div key={`${idx}__${el}`} onClick={() => setActiveCar(idx, el)} className={`${s.order__car} ${idx === auto ? s.order__car_active : ''}`}>
                            <div className={s.order__car_content}>
                                <div className={s.order__car_header}>
                                    <span className={s.order__car_namecar}>{el.model}</span>
                                    <span className={s.order__car_price}>{el.minprice} - {el.maxprice} Р</span>
                                </div>
                                <div className={s.order__car_body}>
                                    <img src={car} alt={`${idx}`} />
                                </div>
                            </div>
                        </div>)
                }
                )
                }
            </div>
        </>
    )
}

export default ChoseCar;
