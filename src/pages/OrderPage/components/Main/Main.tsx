import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import '../../../../styles/order.css'
import Header from '../../../components/Header/Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import Map from '../Map/Map'

export function Main() {
    const [open, setOpen] = React.useState<boolean>(false)
    const [value, setValue] = React.useState<string>('default')

    const handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <div className="order order-container">
                <div className="container">
                    <Header />
                </div>
                <Breadcrumbs />
                <div className="order-main container">
                    <div className="order__chose__city">
                        <div className="order__chose-form">
                            <form className="order-form">
                                <div className="order-form__elem">
                                    <div className="optional-wrapper order-form__elem_layout select-close">
                                        <label>Город</label>
                                        <select value={value} onChange={handleChangeValue} className="underline order-form__elem_ml" >
                                            <option value="default" disabled>Выберите город</option>
                                            <option value="Samara">Самара</option>
                                            <option value="Ul'anovsk">Ульяновск</option>
                                            <option value="Sizran'">Сызрань</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="order-form__elem ">
                                    <div className="optional-wrapper order-form__elem_layout" >
                                        <label>Пункт выдачи</label>
                                        <input type="text" placeholder="Начните вводить пункт..." className="underline order-form__elem_ml" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="order-city">
                            <p>Выбрать на карте</p>
                            <div className="order__city__img">
                                <Map/>
                            </div>
                        </div>
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">

                    </div>
                </div>
            </div>
        </>
    )
}
