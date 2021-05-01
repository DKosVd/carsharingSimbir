import Select from 'react-select'
import customStyles from '../../../../styles/select'
import Map from '../Map/Map'
import Placeholder from '../Placeholder/Placeholder'

const ChoseCity = () => {
    

    return (
        <>
            <div className="order__chose-form">
                <form className="order-form">
                    <div className="order-form__elem order-form__elem_mb">
                        <div className="optional-wrapper order-form__elem_layout order-input-wrapper">
                            <label htmlFor="city">Город</label>
                            <Select className="underline order-form__elem_ml order-input" isClearable components={{Placeholder}} placeholder="Начните вводить город..." styles={customStyles} options={[
                                { value: 'chocolate', label: 'Chocolate' },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' }
                            ]} />
                        </div>
                    </div>
                    <div className="order-form__elem  order-form__elem_mb">
                        <div className="optional-wrapper order-form__elem_layout order-input-wrapper">
                            <label htmlFor="place">Пункт выдачи</label>
                            <Select className="underline order-form__elem_ml order-input" isClearable components={{Placeholder}} placeholder="Начните вводить город..." styles={customStyles} options={[
                                { value: 'chocolate', label: 'Chocolate' },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' }
                            ]} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="order-city">
                <p>Выбрать на карте:</p>
                <div className="order__city__img">
                    <Map query={'Самара'} />
                </div>
            </div>
        </>
    )
}


export default ChoseCity;