import { IText } from "../contracts/state";


const translations:{[index: string] : IText} = {
    'Рус': {
        title: 'Каршеринг',
        subtitle: 'Поминутная аренда авто твоего города',
        btnBook: 'Забронировать',
        sliderElems: [
            {
                title: 'Бесплатная парковка',
                text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
                image: require('../../../../assets/static/1-full.jpg').default,
                colorButton: 'green',
            },
            {
                title: 'Страховка',
                text: 'Полная страховка страховка автомобиля.',
                image: require('../../../../assets/static/2-full.jpg').default,
                colorButton: 'turquoise',
            },
            {
                title: 'Бензин',
                text: 'Полный бак на любой заправке города за наш счёт.',
                image: require('../../../../assets/static/3-full.jpg').default,
                colorButton: 'red',
            },
            {
                title: 'Обслуживание',
                text: 'Автомобиль проходит еженедельное ТО.',
                image: require('../../../../assets/static/4-full.jpg').default,
                colorButton: 'purple',
            }
        ],
        sidebarFull: {
            park: 'Паркова',
            service: 'Обслуживание',
            insurance: 'Страховка',
            gasoline: 'Бензин'
        }
    },
    'Eng': {
        title: 'Carsharing',
        subtitle: 'Per-minute car rental in your city',
        btnBook: 'Book',
        sliderElems: [
            {
                title: 'Free parking',
                text: 'Leave your car in paid city parking lots and permitted places without violating traffic rules, as well as at airports.',
                image: require('../../../../assets/static/1-full.jpg').default,
                colorButton: 'green',
            },
            {
                title: 'Insurance',
                text: 'Full insurance car insurance.',
                image: require('../../../../assets/static/2-full.jpg').default,
                colorButton: 'turquoise',
            },
            {
                title: 'Gasoline',
                text: 'A full tank at any gas station in the city is at our expense.',
                image: require('../../../../assets/static/3-full.jpg').default,
                colorButton: 'red',
            },
            {
                title: 'Service',
                text: 'The car undergoes a weekly maintenance.',
                image: require('../../../../assets/static/4-full.jpg').default,
                colorButton: 'purple',
            }
        ],
        sidebarFull: {
            park: 'Parking',
            service: 'Service',
            insurance: 'Insurance',
            gasoline: 'Gasoline'
        }
    }
}


export default translations;