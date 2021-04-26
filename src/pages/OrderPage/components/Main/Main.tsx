import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import '../../../../styles/order.css'
import Header from '../../../components/Header/Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import Order from '../Order/Order'
import { axios } from '../../../../utils/axios'
import ChoseCity from '../ChoseCity/ChoseCity'
import ChoseCar from '../ChoseCar/ChoseCar'



export function Main() {
    const [open, setOpen] = React.useState<boolean>(false)
    const [city, setCity] = React.useState<string>('')
    const [place, setPlace] = React.useState<string>('')
    const [active, SetActive] = React.useState<number>(0);

    const handleChangeCity = (data: {label: string, value: string} | null) => {
        if(!data) return;
        setCity(data?.value)
    }

    const handleChangePlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlace(e.target.value)
        async function get(params: string) {
            const { data } = await axios.get('/api/db/point')
            const a = data.data.filter((el: any) => el?.cityId?.name.includes(city))
            console.log(a)
            setCity(city + ' ' + a[1].address)
        }
        get(e.target.value)
    }

  

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <div className="order order-container">
                <div className="container">
                    <Header />
                </div>
                <Breadcrumbs active={active}/>
                <div className="order-main container">
                    <div className="order__chose__current">
                            {active === 0 && <ChoseCity/>}
                            {active === 1 && <ChoseCar/>}
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">
                        <Order />
                    </div>
                </div>
            </div>
        </>
    )
}
