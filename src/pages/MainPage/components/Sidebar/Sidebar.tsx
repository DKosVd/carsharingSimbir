import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Telegram } from '@styled-icons/boxicons-logos/Telegram'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import '../../../../styles/sidebar.css'
import React from 'react'
import { Close } from '@styled-icons/evil/Close'

interface ISideBarProps {
    open: boolean;
    setOpen: (elem: boolean) => void;
}

const Sidebar: React.FC<ISideBarProps> = ({open, setOpen}: ISideBarProps) => {


    return (
        <>
            <div className="sidebar">
                <div className="sidebar__wrapper">
                    <div className="sidebar__elems">
                        <div className="sidebar__menu" onClick={() => setOpen(!open)}>
                            <Menu height={'32px'} width={'32px'} color={"white"} />
                        </div>
                        <div className="sidebar__lang">
                            <button className="sidebar__lang_elem">
                                Eng
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            {open && <div className="sidebar__full">
                <nav className="sidebar-menu">
                    <div className="sidebar-menu__control">
                        <span className="sidebar-menu__close" onClick={() => setOpen(!open)}><Close color={"white"} height={'32px'} width={'32px'} /></span>
                        <div className="sidebar__lang sidebar__lang__layout">
                            <span className="sidebar__lang_elem">
                                Eng
                            </span>
                        </div>
                    </div>
                    <div className="sidebar-menu__main">
                        <ul className="sidebar-menu__elems">
                            <li className="sidebar-menu__elem">ПАРКОВКА</li>
                            <li className="sidebar-menu__elem">СТРАХОВКА</li>
                            <li className="sidebar-menu__elem">БЕНЗИН</li>
                            <li className="sidebar-menu__elem">ОБСЛУЖИВАНИЕ</li>
                        </ul>
                        <div className="sidebar-menu__logos">
                            <span className="sidebar-menu__logo"><Telegram color={"black"} height={'20px'} width={'20px'} /></span>
                            <span className="sidebar-menu__logo"><Facebook color={"black"} height={'20px'} width={'20px'} /></span>
                            <span className="sidebar-menu__logo"><Instagram color={"black"} height={'20px'} width={'20px'} /></span>
                        </div>
                    </div>
                </nav>
                <div className="sidebar-manu__part">
                </div>
            </div>}
        </>
    )
}

export default Sidebar