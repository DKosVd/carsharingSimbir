import { useState, createRef, useEffect } from 'react'
import Order from '../Order/Order';

const ToggleOrder = () => {
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
    }, [ref])


    const handleToggle  = () => {
        setShow(!show)
    }

    return (
        <div ref={ref} className={`order__toggle__order ${show ? 'order__toggle__order_show' : ''}`} onClick={handleToggle}>
            <span className="order__toggle__line"></span>
            <div className="order__toggle_wrapper">
                <Order />
            </div>
        </div>
    )
}

export default ToggleOrder