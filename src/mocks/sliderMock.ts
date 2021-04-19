interface ITypeElemSlider {
    title: string,
    text: string,
    image: any,
    colorButton: string
}
const SliderElems:ITypeElemSlider[] = [
    {
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        image: require('../assets/static/1-full.jpg').default,
        colorButton: 'green',
    },
    {
        title: 'Страховка',
        text: 'Полная страховка страховка автомобиля.',
        image: require('../assets/static/2-full.jpg').default,
        colorButton: 'turquoise',
    },
    {
        title: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт.',
        image: require('../assets/static/3-full.jpg').default,
        colorButton: 'red',
    },
    {
        title: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО.',
        image: require('../assets/static/4-full.jpg').default,
        colorButton: 'purple',
    }
]

export default SliderElems;