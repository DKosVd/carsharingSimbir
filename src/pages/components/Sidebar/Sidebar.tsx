import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Telegram } from '@styled-icons/boxicons-logos/Telegram'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import '../../../styles/sidebar.css'
import React, {useState} from 'react'
import { Close } from '@styled-icons/evil/Close'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeLangAction } from '../../../store/actions/lang/lang'
import { RootState } from '../../../store/store'

interface ISideBarProps {
    open: boolean;
    setOpen: (elem: boolean) => void;
}

const Sidebar = ({open, setOpen}: ISideBarProps) => {
    const [toggleLang, setToggleLang] = useState<boolean>(false)
    const dispatch = useDispatch();
    const sidebar = useSelector( (state:RootState) => state.lang.text.sidebarFull);
    const handleChangeLang = (e: React.MouseEvent) => {
        setToggleLang(!toggleLang)
        let text = e.target as HTMLSpanElement
        if(text.textContent) {
            dispatch(ChangeLangAction(text.textContent))
        }
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__wrapper">
                    <div className="sidebar__elems">
                        <div className="sidebar__menu" onClick={() => setOpen(!open)}>
                            <Menu height={'32px'} width={'32px'} color={"white"} />
                        </div>
                        <div className="sidebar__lang">
                            <button className="sidebar__lang_elem" onClick={handleChangeLang}>
                                {toggleLang ? <span>Рус</span> : <span>Eng</span>}
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
                        <button className="sidebar__lang_elem" onClick={handleChangeLang}>
                                {toggleLang ? <span>Рус</span> : <span>Eng</span>}
                        </button>
                        </div>
                    </div>
                    <div className="sidebar-menu__main">
                        <ul className="sidebar-menu__elems">
                            <li className="sidebar-menu__elem">{sidebar.park}</li>
                            <li className="sidebar-menu__elem">{sidebar.insurance}</li>
                            <li className="sidebar-menu__elem">{sidebar.gasoline}</li>
                            <li className="sidebar-menu__elem">{sidebar.service}</li>
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