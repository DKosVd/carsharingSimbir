import { IText } from "../contracts/state";


const translations:{[index: string] : IText} = {
    'Eng': {
        title: 'Каршеринг',
        subtitle: 'Поминутная аренда авто твоего города',
        btnBook: 'Забронировать',
    },
    'Рус': {
        title: 'Carsharing',
        subtitle: 'Per-minute car rental in your city',
        btnBook: 'Book'
    }
}

export default translations;