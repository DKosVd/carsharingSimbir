import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreatableSelect from 'react-select/creatable';
import { FetchCitiesAction } from '../../../../store/actions/city/city'
import customStyles from '../../../../styles/select'
import Map from '../Map/Map'
import Placeholder from '../Placeholder/Placeholder'
import { RootState } from '../../../../store/store'
import { ClearPointsByCityAction, FetchPointsAction, SetPointsByCityAction } from '../../../../store/actions/point/point'
import { ICity } from '../../../../store/reducers/city/contracts/state'
import { IPoints } from '../../../../store/reducers/point/contracts/state'
import { ChoseCityAction, ChosePlaceAction, ClearCityPlace } from '../../../../store/actions/order/order';

interface IChoseCityProps {
    changeActiveBtn: (value: boolean) => void;
}

const ChoseCity = ({changeActiveBtn}: IChoseCityProps) => {
    const dispatch = useDispatch()
    const cities = useSelector( (state: RootState) => state.city.cities);
    const points = useSelector( (state: RootState) => state.point.points);
    const cityPlace = useSelector( (state: RootState) => state.order.choseCity)
    useEffect( () => {
        dispatch(FetchCitiesAction())
    }, [dispatch])

    const handleChoseCity = (elem: ICity | null) => {
        if(elem) {
            dispatch(ChoseCityAction(elem.name))
            dispatch(FetchPointsAction(elem.id))
            return
        }
        dispatch(ClearPointsByCityAction())
        changeActiveBtn(true)
        dispatch(ClearCityPlace())
        return
    }

    const handleChosePoint = (elem: IPoints | null) => {
        if(elem) {
            dispatch(ChosePlaceAction(`${elem.name}, ${elem.address}`))
            changeActiveBtn(false)
            return
        }
        changeActiveBtn(true)
        dispatch(ChosePlaceAction(''))
    }


    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className="order-form__elem order-form__elem_mb">
                        <div className="optional-wrapper order-form__elem_layout order-input-wrapper">
                            <label htmlFor="city">Город</label>
                            <CreatableSelect className="underline order-form__elem_ml order-input"  isClearable onChange={handleChoseCity} components={{Placeholder}} placeholder="Начните вводить город..." styles={customStyles} options={cities || []}
                                getOptionLabel={(option) => option.name} 
                                getOptionValue={(option) => option.name}/>
                        </div>
                    </div>
                    <div className="order-form__elem  order-form__elem_mb">
                        <div className="optional-wrapper order-form__elem_layout order-input-wrapper">
                            <label htmlFor="place">Пункт выдачи</label>
                            <CreatableSelect className="underline order-form__elem_ml order-input"  isClearable onChange={handleChosePoint} components={{Placeholder}} placeholder="Начните вводить город..." styles={customStyles} options={points || []} 
                                getOptionLabel={(option) => option.address} 
                                getOptionValue={(option) => option.name}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="order-city">
                <p>Выбрать на карте:</p>
                <div className="order__city__img">
                    <Map query={cityPlace?.city} place={cityPlace?.address}/>
                </div>
            </div>
        </>
    )
}


export default ChoseCity;