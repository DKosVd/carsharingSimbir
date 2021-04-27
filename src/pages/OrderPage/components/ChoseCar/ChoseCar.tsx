import { useState } from 'react';
import s from './chosecar.module.css';
import car from '../../../../assets/static/car.png'

const ChoseCar = () => {
    const [auto, setAuto] = useState<number | null>(null)

    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className={s.order__form}>
                        <div className="order__form_elem">
                            <input className="custom-radio" id="all" type="radio" name="type_car" value="all" defaultChecked/>
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
                {new Array(10).fill(0).map((el: any, idx: number) => {
                    return (
                        <div key={`${idx}__${el}`} onClick={() => setAuto(idx)} className={`${s.order__car} ${idx === auto ? s.order__car_active : ''}`}>
                            <div className={s.order__car_content}>
                                <div className={s.order__car_header}>
                                    <span className={s.order__car_namecar}>SONATA</span>
                                    <span className={s.order__car_price}>10 000 - 32 000 Р</span>
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
