import { useState, createRef, useEffect } from 'react'
import Order from '../Order/Order';


interface IToggleOrderProps {
    active: number;
    changePage: (p: number) => void;
}

const ToggleOrder = ({active, changePage}: IToggleOrderProps) => {
    const [show, setShow] = useState<boolean>(false);
    const ref = createRef<HTMLDivElement>();

    useEffect( () => {
        function handle(e: MouseEvent):void {
            if(ref.current && show && !ref.current.contains((e.target as Node))) {
                setShow(!show)
            }
        }
        window.addEventListener('click', handle);
        return () => window.removeEventListener('click', handle)
    }, [ref, show])


    const handleToggle  = () => {
        setShow(!show)
    }

    return (
        <div ref={ref} className={`order__toggle__order ${show ? 'order__toggle__order_show' : ''}`} onClick={handleToggle}>
            <span className="order__toggle__line"></span>
            <div className="order__toggle_wrapper">
                <Order active={active} changePage={changePage}/>
            </div>
        </div>
    )
}

export default ToggleOrder