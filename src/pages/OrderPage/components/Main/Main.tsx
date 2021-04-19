import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import '../../../../styles/order.css'
import Header from '../../../components/Header/Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

export function Main() {
    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <div className="order order-container">
                <div className="container">
                    <Header />
                </div>
                <Breadcrumbs/>
                <div className="order-main container">
                    <div className="order__chose__city">

                    </div>
                    <div className="order__yours__order">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
