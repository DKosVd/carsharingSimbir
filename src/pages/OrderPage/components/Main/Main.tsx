import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import '../../../../styles/order.css'
import Header from '../../../components/Header/Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import Order from '../Order/Order'
import ChoseCity from '../ChoseCity/ChoseCity'
import ChoseCar from '../ChoseCar/ChoseCar'
import ChoseDls from '../ChoseDls/ChoseDls'
import { Menu } from '@styled-icons/boxicons-regular'
import ToggleOrder from '../ToggleOrder/ToggleOrder'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { ChangeActiveBtn, ChangeActiveStepAction, ChangeStepAction } from '../../../../store/actions/order/order'



export function Main() {
    const [open, setOpen] = React.useState<boolean>(false)
    const dispatch = useDispatch();
    const currentActive = useSelector( (state: RootState) => state.order.currentStep);
    const active = useSelector( (state: RootState) => state.order.step);
    const handlechangePage = (page: number) => {
        dispatch(ChangeActiveStepAction(page))
        dispatch(ChangeStepAction(page))
    }

    const handleChangeActiveBtn = (value: boolean) => {
        dispatch(ChangeActiveBtn({active: currentActive, isDisabled: value}))
    }

    const handleChangeCuurentActive = (page: number) => {
        dispatch(ChangeActiveStepAction(page))
    }

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <div className="order order-container">
                <div className="container main-header">
                    <div className="main-header__menu" onClick={() => setOpen(!open)}>
                            <Menu width={"32px"} height={"32px"} />
                    </div>
                    <Header />
                </div>
                <Breadcrumbs active={active} currentActive={currentActive} changePage={handleChangeCuurentActive} />
                <div className="order-main container">
                    <div className="order__chose__current">
                        {currentActive === 0 && <ChoseCity changeActiveBtn={handleChangeActiveBtn}/>}
                        {currentActive === 1 && <ChoseCar changeActiveBtn={handleChangeActiveBtn}/>}
                        {currentActive === 2 && <ChoseDls changeActiveBtn={handleChangeActiveBtn}/>}
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">
                        <Order active={currentActive} changePage={handlechangePage}/>
                    </div>
                </div>
                <ToggleOrder active={currentActive} changePage={handlechangePage}/>
            </div>
        </>
    )
}
