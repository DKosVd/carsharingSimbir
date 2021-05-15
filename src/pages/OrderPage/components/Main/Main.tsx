import {useState} from 'react'
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
import Total from '../Total/Total'
import Popup from '../../../components/Popup/Popup'



export function Main() {
    const [open, setOpen] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const dispatch = useDispatch();
    const currentActive = useSelector((state: RootState) => state.order.currentStep);
    const active = useSelector((state: RootState) => state.order.step);
    const handlechangePage = (page: number) => {
        dispatch(ChangeActiveStepAction(page))
        dispatch(ChangeStepAction(page))
    }

    const handleChangeStep = (p: number) => {
        dispatch(ChangeStepAction(p))
    }


    const handleChangeActiveBtn = (value: boolean) => {
        dispatch(ChangeActiveBtn({ active: currentActive, isDisabled: value }))
    }

    const handleChangeCurrentActive = (page: number) => {
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
                <Breadcrumbs active={active} currentActive={currentActive} changePage={handleChangeCurrentActive} />
                <div className="order-main container">
                    <div className="order__chose__current">
                        {currentActive === 0 && <ChoseCity changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} />}
                        {currentActive === 1 && <ChoseCar changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} />}
                        {currentActive === 2 && <ChoseDls changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep}/>}
                        {currentActive === 3 && <Total changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} />}
                        {currentActive === 4 && <Total changeActiveBtn={handleChangeActiveBtn} changePage={handleChangeStep} result={true}/>}
                    </div>
                    <div className="order__empty">

                    </div>
                    <div className="order__yours__order">
                        <Order active={currentActive} changePage={handlechangePage} showPopup={setShow}/>
                    </div>
                </div>
                <ToggleOrder active={currentActive} changePage={handlechangePage} showPopup={setShow}/>
            </div>
            <Popup show={show}>
                <div className="order__popup__accept">
                    <div className="order__popup__wrapper">
                        <h3 className="order__popup__title">Подтвердить заказ</h3>
                        <div className="order__popup__control">
                            <button className="btn btn-book" onClick={() => {
                                handlechangePage(currentActive + 1)
                                setShow(false)
                            } }>Подтвердить</button>
                            <button className="btn btn-book btn-detail__red" onClick={() => {
                                handleChangeStep(3)
                                setShow(false)
                            }}>Вернуться</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}
