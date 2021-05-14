

interface IPopupProps {
    children: React.ReactNode;
    show: boolean;
}

const Popup = ({ children, show }: IPopupProps) => {

    return (
        <>
            {show && <div className="popup">
                {children}
            </div>}
        </>
    )
}

export default Popup;