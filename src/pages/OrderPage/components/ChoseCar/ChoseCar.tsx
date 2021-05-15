import React, { useState, useEffect } from 'react';
import s from './chosecar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ChoseCarAction, ClearDLC } from '../../../../store/actions/order/order';
import { FetchCarsAction, FetchCategoryAction, SetTypeAction } from '../../../../store/actions/cars/cars';
import { RootState } from '../../../../store/store';
import { ICar } from '../../../../store/reducers/cars/contracts/state';
import { isBaseImg } from '../../../../utils/isBase64';

interface IChoseCarProps {
    changeActiveBtn: (value: boolean) => void;
    changePage: (p: number) => void;
}


const ChoseCar = ({ changeActiveBtn, changePage }: IChoseCarProps) => {
    const [auto, setAuto] = useState<string | null>(null)
    const activeAuto = useSelector((state: RootState) => state.order.choseCar?.id);
    const autosByType = useSelector((state: RootState) => state.cars.carsByType) 
    const categories = useSelector((state: RootState) => state.cars.category);
    const dispatch = useDispatch()


    const handleChangeType = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SetTypeAction(e.currentTarget.value))
    }

    useEffect(() => {
        if (activeAuto) {
            setAuto(activeAuto)
            return
        }
        dispatch(FetchCarsAction())
        dispatch(FetchCategoryAction())
    }, [activeAuto, dispatch])


    const setActiveCar = (id: string, el: ICar) => {
        dispatch(ChoseCarAction(el))
        dispatch(ClearDLC())
        changePage(2)
        setAuto(id)
        changeActiveBtn(false)
    }

    if(!autosByType) {
        return null
    }

    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className={s.order__form}>
                        <div className="order__form_elem">
                            <input className="custom-radio" onChange={handleChangeType} id="all" type="radio" name="type_car" value="all" defaultChecked/>
                            <label htmlFor="all">Все модели</label>
                        </div>
                        {categories && categories.map(category => {
                            return (
                                <div key={category.id} className="order__form_elem">
                                    <input className="custom-radio" onChange={handleChangeType} id={`${category.id}`} type="radio" name="type_car" value={`${category.id}`} />
                                    <label htmlFor={`${category.id}`}>{category.name}</label>
                                </div>
                            )
                        })}
                    </div>
                </form>
            </div>
            <div className={`${s.order__cars} ${autosByType.length <= 6 ? `${s.order__car__h}` : ''}`}>
                {autosByType && autosByType.map((el, idx: number) => {
                    return (
                        <div key={`${idx}__${el}`} onClick={() => setActiveCar(el.id, el)} className={`${s.order__car}  ${el.id === auto ? s.order__car_active : ''}`}>
                            <div className={s.order__car_content}>
                                <div className={s.order__car_header}>
                                    <span className={s.order__car_namecar}>{el.name}</span>
                                    <span className={s.order__car_price}>{el.priceMin} - {el.priceMax} ₽</span>
                                </div>
                                <div className={s.order__car_body}>
                                    <div className={s.order__car__body_img} style={{ backgroundImage: `url(${isBaseImg(el.thumbnail.path)})` }}>
                                    </div>
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
