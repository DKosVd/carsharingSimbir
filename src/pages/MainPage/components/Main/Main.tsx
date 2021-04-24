import {useState} from 'react'
import '../../../../styles/main.css'
import { Footer } from '../Footer/Footer'
import Header from '../../../components/Header/Header'
import { Menu } from "@styled-icons/boxicons-regular/Menu"
import Sidebar from '../../../components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'


export function Main() {
    const [open, setOpen] = useState<boolean>(false)
    const text = useSelector( (state:RootState) => state.lang.text);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen}/>
            <main className="main">
                <div className="main__wrapper">
                    <div className="main-full">
                        <div className="main-header">
                        <div className="main-header__menu" onClick={() => setOpen(!open)}>
                            <Menu width={"32px"} height={"32px"} />
                            
                        </div>
                        <Header />
                        </div>
                        <div className="main-content">
                            <h1 className="main-content__title main-content__title_car">{text.title}</h1>
                            <h1 className="main-content__title main-content__title_name">Need for drive</h1>
                            <p className="main-content__text main-content__text_layout">{text.subtitle}</p>
                            <button className="main-content__btn btn  btn-book" tabIndex={1}>{text.btnBook}</button>
                        </div>
                        <Footer />
                    </div>

                </div>
            </main>
        </>
    )
}
