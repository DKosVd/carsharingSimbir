import React from 'react'

interface IActiveDotsProps {
    active: number,
    onClick: (index: number) => void
}

export const ActiveDots: React.FC<IActiveDotsProps> = ({active, onClick} : IActiveDotsProps) => {

    return (
    <div className="slider-content__dots">
        {new Array(4).fill(0).map( (elem, idx) => <span key={`${idx}__${elem}`} onClick={() => onClick(idx)} className={`slider-content__dot ${ idx === active ? 'slider-content__dot_active': ''}`}></span> )}
    </div>
    )
}
