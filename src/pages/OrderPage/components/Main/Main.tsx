import {useEffect, useState} from 'react'
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
import { useHistory } from 'react-router';
import { RootState } from '../../../../store/store'
import { AcceptAction, ChangeActiveBtn, ChangeActiveStepAction, ChangeStepAction, FetchOrderByIdAction } from '../../../../store/actions/order/order'
import Total from '../Total/Total'
import Popup from '../../../components/Popup/Popup'



export function Main() {
    const [open, setOpen] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const {location} = useHistory() 
    const history = useHistory()
    const numberOrder = useSelector((state: RootState) => state.order.id);
    const dispatch = useDispatch();
    const order = useSelector((state: RootState) => state.order)
    const handlechangePage = (page: number) => {
        dispatch(ChangeActiveStepAction(page))
        dispatch(ChangeStepAction(page))
    }

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if(path && path !== 'order') {
            dispatch(FetchOrderByIdAction(path))
            handlechangePage(3);
        }
    }, [dispatch])

    const handleChangeStep = (p: number) => {
        dispatch(ChangeStepAction(p))
    }


    const handleChangeActiveBtn = (value: boolean) => {
        dispatch(ChangeActiveBtn({ active: order.currentStep, isDisabled: value }))
    }

    const handleChangeCurrentActive = (page: number) => {
        dispatch(ChangeActiveStepAction(page))
    }

    const handleAcceptOrder = () => {
        dispatch(AcceptAction())
        setShow(false)
    }

    const handleRejectOrder = () => {
        handleChangeStep(3)
        setShow(false)
    }

    if(numberOrder) {
        history.push(`/order/${numberOrder}`)
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
                <Breadcrumbs active={order.step} currentActive={order.currentStep} changePage={handleChangeCurrentActive} />
                <div className="order-main container">
                    <div className="order__chose__current">
                        {order.currentStep === 0 && <ChoseCity changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} />}
                        {order.currentStep === 1 && <ChoseCar changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} />}
                        {order.currentStep === 2 && <ChoseDls changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep}/>}
                        {order.currentStep === 3 && <Total changeActiveBtn={handleChangeActiveBtn} />} 
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">
                        <Order active={order.currentStep} changePage={handlechangePage} showPopup={setShow}/>
                    </div>
                </div>
                <ToggleOrder active={order.currentStep} changePage={handlechangePage} showPopup={setShow}/>
            </div>
            <Popup show={show}>
                <div className="order__popup__accept">
                    <div className="order__popup__wrapper">
                        <h3 className="order__popup__title">Подтвердить заказ</h3>
                        <div className="order__popup__control">
                            <button className="btn btn-book" onClick={handleAcceptOrder}>Подтвердить</button>
                            <button className="btn btn-book btn-detail__red" onClick={handleRejectOrder}>Вернуться</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}
