import { useState } from 'react';
import s from './chosecar.module.css';

const ChoseCar = () => {
    const [auto, setAuto] = useState<number>(0)

    return (
        <>
        <div className="order__chose-form">
                <form className="order-form">
                    <input/>
                    <input/>
                    <input/>
                </form>
            </div>
            <div className={s.order__cars}>
                {new Array(10).fill(0).map( (el:any, idx: number) =>  <div key={`${idx}__${el}`} onClick={() => setAuto(idx)} className={`${s.order__car} ${idx === auto ? s.order__car_active : ''}`}></div> )}
        </div>
        </>
    )
}

export default ChoseCar;
