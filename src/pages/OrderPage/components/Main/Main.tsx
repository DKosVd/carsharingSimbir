import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import '../../../../styles/order.css'
import Header from '../../../components/Header/Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import Map from '../Map/Map'
import Order from '../Order/Order'
import { axios } from '../../../../utils/axios'

export function Main() {
    const [open, setOpen] = React.useState<boolean>(false)
    const [city, setCity] = React.useState<string>('')
    const [place, setPlace] = React.useState<string>('')

    const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }

    const handleChangePlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlace(e.target.value)
        async function get(params:string) {
            const {data} = await axios.get('/api/db/point')   
            const a = data.data.filter( (el:any) => el?.cityId?.name.includes(city))
            console.log(a)
            setCity(city + ' ' +  a[1].address)
        }
        get(e.target.value)
    }

    console.log(city)

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
                                        <select value={city} onChange={handleChangeCity} className="underline order-form__elem_ml" >
                                            <option value="" disabled>Выберите город</option>
                                            <option value="Самара">Самара</option>
                                            <option value="Ульяновск">Ульяновск</option>
                                            <option value="Сызрань">Сызрань</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="order-form__elem ">
                                    <div className="optional-wrapper order-form__elem_layout" >
                                        <label>Пункт выдачи</label>
                                        <input type="text" value={place} placeholder="Начните вводить пункт..." className="underline order-form__elem_ml" onChange={handleChangePlace}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="order-city">
                            <p>Выбрать на карте:</p>
                            <div className="order__city__img">
                                <Map query={city}/>
                            </div>
                        </div>
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">
                            <Order/>
                    </div>
                </div>
            </div>
        </>
    )
}
