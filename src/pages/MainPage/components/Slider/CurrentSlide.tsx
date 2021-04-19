import React from 'react'

interface ICurrentSlideProps {
    title: string,
    text: string,
    colorButton: string
}

export const CurrentSlide: React.FC<ICurrentSlideProps> = ({ title, text, colorButton }: ICurrentSlideProps) => {
    return (
        <article className="slider-content__main">
            <h1 className="slider-content__title">{title}</h1>
            <p className="slider-content__text">{text}</p>
            <button className={`btn btn-detail slider-content__item ${`btn-detail__${colorButton}`}`}>Подробнее</button>
        </article>
    )
}
